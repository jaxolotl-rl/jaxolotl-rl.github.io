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
- Colours and layout: `style.css` (`:root` contains the trailer’s dark navy, mint, and lavender palette).
- Trailer, figure enlargement, and citation copy: `script.js`.
- Trailer: `assets/video/teaser.mp4`, with descriptive captions in `teaser.vtt`.
- Paper and citation: `assets/paper.pdf` and `assets/citation.bib`. Keep the inline BibTeX in `index.html` consistent with the latter.
- Policy videos: `assets/video/rollouts/` contains warehouse and Franka MP4s and matching posters, copied from `../jaxolotl/output/video/rollouts/`. The Visualisations grid places warehouse left and Franka right when the content fits two players at least 480px wide; otherwise warehouse appears above Franka. Screens up to 600px use the portrait videos and posters; larger screens use landscape versions. Players use native controls and defer video downloads until playback.

## Figure provenance and reproduction

The original timing CSVs and plotting script were copied from the Jaxolotl repository's `mj/paper-plots` branch into the current `mj/website` branch. Data are unchanged. Website scripts are kept in the neighbouring research repository:

```sh
cd ../jaxolotl
pixi run python paper_plots/non_benchmark/efficiency_website.py
pixi run python local/website/prepare_assets.py
```

`efficiency_website.py` renders website-coloured SVGs and PNGs from `e2e_training_results.csv` and `e2e_eval_results.csv`. Desktop figures show methods side by side; mobile figures stack them for readable labels. Timings, logarithmic scales, endpoint annotations, and reported speedups match Figure 3 of the paper.

`paper_plots/website_overview/overview.tex` is a copy of `/home/mathias/work/dphil/papers/jaxolotl-iclr/overview.tex`, adapted to the website palette. Its small image dependencies are included next to the copied source. `prepare_assets.py` requires the existing teaser source frames, system Inter fonts, FFmpeg, and TeX/Poppler. It also prepares compressed self-hosted Inter fonts, environment stills, the trailer poster, and the social card. It does not modify the paper's original figure.

The original page uses the `overview-outline.svg`, `training-muted.svg`, and `training-mobile-muted.svg` vector variants. Only training timings are shown. The header, trailer, and reading sections share one continuous dark navy background. Consistent vertical spacing and fine rules with mint slash accents separate the sections; the videos and citation use matching rounded corners and quiet borders. The overview uses muted blue-grey, lavender, and mint outlines with transparent panel interiors. Section headings and reading blocks are centered; prose and figure captions remain justified, with automatic hyphenation. Desktop figures use 85% of the content width, capped at 1,020px; on smaller screens they use the available width. The BibTeX section has a matching copy control. Figure canvases are transparent, and training plot interiors match the reading surface. The earlier figure variants remain available for the alternate design. The main content column is 1,200px wide. Noto Sans is self-hosted in `assets/fonts/`, with its licence in `NOTO-LICENSE.txt`; the earlier Inter fonts and light figures are retained as unused assets.

Site assets are already generated; none of these tools are required to view or deploy the site. SVGs are used in the page; PNG exports are retained for convenient reuse. Font licence information is in `assets/fonts/LICENSE.txt`.

## Video-first alternate design

Open `/video-first/` on the same preview server for the alternate opening. A full-viewport video plays silently, with play/pause and sound controls. The paper header and original sections scroll over the pinned video. The video is fitted without cropping its text, including on portrait screens. Reduced-motion preferences disable autoplay and the pinned effect; playback also pauses when the opening scrolls out of view or the tab is hidden.

The alternate lives in `video-first/` and shares the original stylesheet, figure/citation script, and assets through relative paths. The original page is unchanged. Only its video placement and presentation differ; no duplicate video download is stored in the repository.
