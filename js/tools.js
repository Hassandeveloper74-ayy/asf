/* Tools & technologies grid for the UI/UX service pages.
   Usage: <div class="tools" data-tools="Figma|Sketch|Miro"> ...fallback chips... </div>
   Icons: real logos where available, otherwise brand-colour tiles. To use an official logo,
   replace the matching data: URI in REG below (or point it at /assets/ui/tools/<name>.svg). */
(function(){
var ORDER=["Design", "Prototyping", "Research & Testing", "Collaboration", "Handoff & Dev", "Standards & A11y"];
var REG={
"Figma": [
"Design",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath fill='%230acf83' d='M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0'/%3E%3Cpath fill='%23a259ff' d='M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0'/%3E%3Cpath fill='%23f24e1e' d='M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0'/%3E%3Cpath fill='%23ff7262' d='M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0'/%3E%3Cpath fill='%231abcfe' d='M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0'/%3E%3C/svg%3E"
],
"Sketch": [
"Design",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23FDAD00' d='M13 5h22l8 10H5z'/%3E%3Cpath fill='%23FDD231' d='M13 5l-4 10h30l-4-10z' opacity='.0'/%3E%3Cpath fill='%23EA6C00' d='M5 15h38L24 44z'/%3E%3Cpath fill='%23FDAD00' d='M15 15h18L24 44z'/%3E%3Cpath fill='%23FEEEB7' d='M13 5l2 10h18l2-10z'/%3E%3C/svg%3E"
],
"Adobe XD": [
"Design",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23470137'/%3E%3Ctext x='24' y='31.7' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='22' fill='%23FF61F6'%3EXd%3C/text%3E%3C/svg%3E"
],
"Adobe Illustrator": [
"Design",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23330000'/%3E%3Ctext x='24' y='31.7' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='22' fill='%23FF9A00'%3EAi%3C/text%3E%3C/svg%3E"
],
"Auto Layout": [
"Design",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath fill='%230acf83' d='M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0'/%3E%3Cpath fill='%23a259ff' d='M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0'/%3E%3Cpath fill='%23f24e1e' d='M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0'/%3E%3Cpath fill='%23ff7262' d='M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0'/%3E%3Cpath fill='%231abcfe' d='M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0'/%3E%3C/svg%3E"
],
"Figma Variables": [
"Design",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath fill='%230acf83' d='M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0'/%3E%3Cpath fill='%23a259ff' d='M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0'/%3E%3Cpath fill='%23f24e1e' d='M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0'/%3E%3Cpath fill='%23ff7262' d='M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0'/%3E%3Cpath fill='%231abcfe' d='M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0'/%3E%3C/svg%3E"
],
"Framer": [
"Prototyping",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230A0A0A' d='M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z'/%3E%3C/svg%3E"
],
"Lottie": [
"Prototyping",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%2300DDB3'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23111'%3ELo%3C/text%3E%3C/svg%3E"
],
"Balsamiq": [
"Prototyping",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23CC0000'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EBq%3C/text%3E%3C/svg%3E"
],
"Webflow": [
"Prototyping",
"data:image/svg+xml,%3Csvg fill='%23146EF5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z'/%3E%3C/svg%3E"
],
"Maze": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%236C4DFF'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EMz%3C/text%3E%3C/svg%3E"
],
"Hotjar": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23FD3A5C'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3Ehj%3C/text%3E%3C/svg%3E"
],
"Google Analytics": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect x='31' y='4' width='12' height='40' rx='6' fill='%23F9AB00'/%3E%3Crect x='18' y='20' width='12' height='24' rx='6' fill='%23E37400'/%3E%3Ccircle cx='11' cy='38' r='6' fill='%23E37400'/%3E%3C/svg%3E"
],
"UserTesting": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23EF4A4A'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EUT%3C/text%3E%3C/svg%3E"
],
"Dovetail": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%236B4BFF'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EDt%3C/text%3E%3C/svg%3E"
],
"Typeform": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23262627'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3ETf%3C/text%3E%3C/svg%3E"
],
"Google Forms": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%237248B9' d='M10 4h20l10 10v30a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z'/%3E%3Cpath fill='%23B39DDB' d='M30 4l10 10H30z'/%3E%3Cg fill='%23fff'%3E%3Ccircle cx='16' cy='25' r='2'/%3E%3Crect x='21' y='23.5' width='13' height='3' rx='1.5'/%3E%3Ccircle cx='16' cy='33' r='2'/%3E%3Crect x='21' y='31.5' width='13' height='3' rx='1.5'/%3E%3C/g%3E%3C/svg%3E"
],
"Lighthouse": [
"Research & Testing",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23F44B21'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3ELh%3C/text%3E%3C/svg%3E"
],
"FigJam": [
"Collaboration",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23A259FF'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EFJ%3C/text%3E%3C/svg%3E"
],
"Miro": [
"Collaboration",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23FFD02F'/%3E%3Ctext x='24' y='33.1' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='26' fill='%23111'%3Em%3C/text%3E%3C/svg%3E"
],
"Notion": [
"Collaboration",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect x='5' y='4' width='38' height='40' rx='7' fill='%23fff' stroke='%23111' stroke-width='3'/%3E%3Cpath d='M16 33V15l15 18V15' fill='none' stroke='%23111' stroke-width='4' stroke-linejoin='round' stroke-linecap='round'/%3E%3C/svg%3E"
],
"Loom": [
"Collaboration",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%23625DF5'/%3E%3Cg stroke='%23fff' stroke-width='4.5' stroke-linecap='round'%3E%3Cpath d='M24 10v28'/%3E%3Cpath d='M11.9 17l24.2 14'/%3E%3Cpath d='M11.9 31l24.2-14'/%3E%3C/g%3E%3C/svg%3E"
],
"Whimsical": [
"Collaboration",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%237C5CFF'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EWh%3C/text%3E%3C/svg%3E"
],
"UXPressia": [
"Collaboration",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%2300A5B5'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EUX%3C/text%3E%3C/svg%3E"
],
"Linear": [
"Collaboration",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%235E6AD2'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3ELi%3C/text%3E%3C/svg%3E"
],
"Zeplin": [
"Handoff & Dev",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23FDBD39'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23111'%3EZp%3C/text%3E%3C/svg%3E"
],
"Storybook": [
"Handoff & Dev",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23FF4785'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3ESb%3C/text%3E%3C/svg%3E"
],
"Style Dictionary": [
"Handoff & Dev",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%230B5FFF'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3ESD%3C/text%3E%3C/svg%3E"
],
"Zeroheight": [
"Handoff & Dev",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%2317C5A9'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3E0h%3C/text%3E%3C/svg%3E"
],
"Tailwind CSS": [
"Handoff & Dev",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0' fill='%2338bdf8'/%3E%3C/svg%3E"
],
"GitHub": [
"Handoff & Dev",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23181717' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E"
],
"Stark": [
"Standards & A11y",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23111111'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3ESt%3C/text%3E%3C/svg%3E"
],
"axe DevTools": [
"Standards & A11y",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%237A2EE0'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3Eax%3C/text%3E%3C/svg%3E"
],
"WCAG 2.2": [
"Standards & A11y",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%230F4C81'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3EAA%3C/text%3E%3C/svg%3E"
],
"Nielsen heuristics": [
"Standards & A11y",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='11' fill='%23E8590C'/%3E%3Ctext x='24' y='31.0' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-weight='700' font-size='20' fill='%23fff'%3ENN%3C/text%3E%3C/svg%3E"
],
"Material Design": [
"Standards & A11y",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%231E88E5'/%3E%3Cpath d='M24 9l15 26H9z' fill='%23fff' opacity='.95'/%3E%3Ccircle cx='24' cy='28' r='5' fill='%231E88E5'/%3E%3C/svg%3E"
],
"Apple HIG": [
"Standards & A11y",
"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23111' d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'/%3E%3C/svg%3E"
]
};
function esc(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
document.querySelectorAll('.tools[data-tools]').forEach(function(box){
  var names=box.getAttribute('data-tools').split('|').map(function(s){return s.trim()}).filter(function(n){return REG[n]});
  if(!names.length)return;
  var cats=ORDER.filter(function(c){return names.some(function(n){return REG[n][0]===c})});
  var html='';
  if(cats.length>1){
    html+='<div class="tg-tabs" role="group" aria-label="Filter by category"><button type="button" class="tg-tab on" data-cat="all" aria-pressed="true">All<i>'+names.length+'</i></button>'+
      cats.map(function(c){var k=names.filter(function(n){return REG[n][0]===c}).length;return '<button type="button" class="tg-tab" data-cat="'+esc(c)+'" aria-pressed="false">'+esc(c)+'<i>'+k+'</i></button>'}).join('')+'</div>';
  }
  html+='<ul class="tg" aria-label="Tools and technologies we use">'+names.map(function(n){
    return '<li class="tg-cell" tabindex="0" data-cat="'+esc(REG[n][0])+'" title="'+esc(n)+'"><img src="'+REG[n][1]+'" alt="" width="48" height="48" loading="lazy" decoding="async" draggable="false"><span class="tg-name">'+esc(n)+'</span></li>'}).join('')+'</ul>';
  box.innerHTML=html;
  var tabs=[].slice.call(box.querySelectorAll('.tg-tab')),cells=[].slice.call(box.querySelectorAll('.tg-cell'));
  tabs.forEach(function(t){t.addEventListener('click',function(){
    tabs.forEach(function(x){var on=x===t;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});
    cells.forEach(function(c){c.hidden=!(t.dataset.cat==='all'||c.dataset.cat===t.dataset.cat)});
  })});
});
})();
