// Local server with clean URLs (no .html). Run:  node server.js   then open http://localhost:3000
const zlib=require('zlib'),http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname, port=process.env.PORT||3000;
const cfg=JSON.parse(fs.readFileSync(path.join(root,'vercel.json'),'utf8'));
const redirects=new Map((cfg.redirects||[]).map(r=>[r.source,r.destination]));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.avif':'image/avif','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.ico':'image/x-icon','.json':'application/json','.woff2':'font/woff2','.woff':'font/woff','.mp4':'video/mp4','.txt':'text/plain'};
http.createServer((req,res)=>{
  const u=new URL(req.url,'http://x'); let p=decodeURIComponent(u.pathname);
  const go=(to,code)=>{res.writeHead(code||308,{Location:to+u.search});res.end()};
  if(redirects.has(p)) return go(redirects.get(p));
  if(/\/index\.html$/.test(p)) return go(p.replace(/\/index\.html$/,'')||'/');
  if(/\.html$/.test(p)) return go(p.replace(/\.html$/,''));
  if(p.length>1&&p.endsWith('/')) return go(p.slice(0,-1));
  const safe=path.normalize(path.join(root,p)); if(!safe.startsWith(root)){res.writeHead(403);return res.end()}
  const tries=[safe,path.join(safe,'index.html'),safe+'.html'];
  for(const f of tries){ if(fs.existsSync(f)&&fs.statSync(f).isFile()){ const ext=path.extname(f).toLowerCase(); const h={'Content-Type':mime[ext]||'application/octet-stream'};
      if(/^\/assets\//.test(p)) h['Cache-Control']='public, max-age=31536000, immutable';
      if(['.html','.css','.js','.svg','.json','.txt'].includes(ext)&&/gzip/.test(req.headers['accept-encoding']||'')){ h['Content-Encoding']='gzip'; h['Vary']='Accept-Encoding'; res.writeHead(200,h); return fs.createReadStream(f).pipe(zlib.createGzip()).pipe(res); }
      res.writeHead(200,h); return fs.createReadStream(f).pipe(res);} }
  const notFound=path.join(root,'404.html');
  res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
  if(fs.existsSync(notFound)) return fs.createReadStream(notFound).pipe(res);
  res.end('404 - Page not found');
}).listen(port,()=>console.log('Zynocta site running at http://localhost:'+port));
