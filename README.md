# Jaxolotl project website

A self-contained academic project page for **Jaxolotl: A Unified High-Performance Benchmark Suite for LTL-Based Multi-Task RL**. Plain HTML, CSS, and JavaScript, with no build step, CDN, analytics, or runtime dependencies.

## Preview

From the neighbouring Jaxolotl workspace:

```sh
pixi run python -m http.server 8000 --bind 127.0.0.1 --directory ../jaxolotl.github.io
```

Open <http://localhost:8000>. `index.html` can also be opened directly; copying the citation may use the selection fallback on `file://` URLs.

## GitHub Pages

Push the contents of this directory to the intended GitHub Pages repository. In **Settings → Pages**, choose **Deploy from a branch**, select the publishing branch, and choose **/ (root)**. `.nojekyll` enables direct static serving. There is no build or workflow to maintain. All content paths are relative, so the site also works under a repository subpath.

The social-card URL in `index.html` assumes `https://jaxolotl.github.io/`; update it if the final hostname differs. No remote repository or deployment has been created as part of this local design draft.

## Edit the design

- Content and section structure: `index.html`.
- Colours and layout: `style.css` (`:root` contains the trailer palette).
- Trailer, figure enlargement, and citation copy: `script.js`.
- Trailer: `assets/video/teaser.mp4`, with descriptive captions in `teaser.vtt`.
- Paper and citation: `assets/paper.pdf` and `assets/citation.bib`. Keep the inline BibTeX in `index.html` consistent with the latter.
- Four task placeholders: `.demo-grid` in `index.html`. Replace a `.demo-still` with a `<video controls muted loop playsinline preload="metadata" poster="…">` when the final rollout is available, remove its “Video coming soon” badge, and update the caption/formula to match the actual task. Current captions are illustrative; current images are stills from the trailer's recordings, not new policy results.

## Figure provenance and reproduction

The original timing CSVs and plotting script were copied from the Jaxolotl repository's `mj/paper-plots` branch into the current `mj/website` branch. Data are unchanged. Website scripts are kept in the neighbouring research repository:

```sh
cd ../jaxolotl
pixi run python paper_plots/non_benchmark/efficiency_website.py
pixi run python local/website/prepare_assets.py
```

`efficiency_website.py` renders website-coloured SVGs and PNGs from `e2e_training_results.csv` and `e2e_eval_results.csv`. Desktop figures show methods side by side; mobile figures stack them for readable labels. Timings, logarithmic scales, endpoint annotations, and reported speedups match Figure 3 of the paper.

`paper_plots/website_overview/overview.tex` is a copy of `/home/mathias/work/dphil/papers/jaxolotl-iclr/overview.tex`, adapted to the website palette. Its small image dependencies are included next to the copied source. `prepare_assets.py` requires the existing teaser source frames, system Inter fonts, FFmpeg, and TeX/Poppler. It also prepares compressed self-hosted Inter fonts, environment stills, the trailer poster, and the social card. It does not modify the paper's original figure.

Site assets are already generated; none of these tools are required to view or deploy the site. SVGs are used in the page; PNG exports are retained for convenient reuse. Font licence information is in `assets/fonts/LICENSE.txt`.
