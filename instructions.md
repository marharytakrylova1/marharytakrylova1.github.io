in the education section i want to change the haravrd medical school window to say sept 2025 - may 2026. in the onors section i want to add "Capstone Defense" in addition to deans scholarship 

in the expereinces section, add a new job: clinical operations and research specialist. may 2026 - present. Medivis. NYC. update the lightup timeline bar and the mobile version light up scross to reflect that. 

for all the other job expereinces, add locations after the company name. carbon health - bsoton, ma; phlebotomy - durham, nc; 

for leadership change my position at Ivy league+ to have ended feb 2026. update the limeline accordingly. 

for current research end the patient education research at harvard med. it ended may 2026. 
for the MESH incubator study, make the clinician attitudes toward LLM adoption study complete but add another study under the same position. i am leading a study evaluating LLM consistency in triage diecsion-making in clinical settings. 

for posters add another entry for this study: Developing a Patient Decision Aid for Artificial Intelligence in Clinical Care: An International Patient Decision Aid Standards–Based Prototype
it was presented at Harvard Medical School MS in Bioethics Symposium        Apr 2026 and 
 National Student Bioethics Association Virtual Conference				         Apr 2026

## Website appearance
- Typography is slightly smaller site-wide, with additional reductions for hero, section, and card headings.
- The compact 36 × 20 px sliding switch in the header has a minimal gray sun outline on the left and moon outline on the right. Light mode uses a light gray track (thumb left); dark mode uses a darker gray track (thumb right). The initial theme follows the device preference; an explicit selection is saved in browser local storage and takes precedence on future visits.
- Download Resume appears in the hero section only, not in the desktop or mobile navigation.

## Publications
- “Evaluating AI Chatbot Response Quality and Readability for Patient Education on Endoscopic Lumbar Discectomy: A Comparative Study of GPT-4o and Claude 3.5 Sonnet” is accepted for publication in Bulletin of the Hospital for Joint Diseases. Authors, in order: Marharyta Krylova, Elina Khabibullina, Muhammad Abd-El-Barr, Don Young Park. No publication date or DOI is available yet; display the acceptance status without a placeholder link.

## Asset caching
- `index.html` uses content-versioned query strings for `style.css` and `script.js` to avoid mixing fresh HTML with cached assets. When either asset changes, update its `v` value to the first 12 characters of its SHA-256 hash (`shasum -a 256 style.css script.js`) and deploy the updated HTML with the assets.
