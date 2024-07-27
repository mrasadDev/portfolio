import React, { useEffect } from "react";
import Isotope from "isotope-layout";

function Portfolio() {
  useEffect(() => {
    let iso;
    iso = new Isotope('.portfolio-container', {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    const filtersElem = document.querySelector('#portfolio-flters');
    filtersElem?.addEventListener('click', (event) => {
      const target = event.target as Element;
      if (!target.matches('li')) {
        return;
      }
      const filterValue = target.getAttribute('data-filter');
      if (filterValue) {
        iso.arrange({ filter: filterValue });

        filtersElem.querySelectorAll('li').forEach(li => li.classList.remove('filter-active'));
        target.classList.add('filter-active');
      }
    });

    return () => iso.destroy();
  }, []);

  return (
    <section id="portfolio" className="portfolio pt-0">
      <div className="container">
        <div className="section-header">
          <h2 className="text-center">Our Recent Work</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="/portfolio/portfolio-1.jpeg"
              className="img-fluid"
              alt=""
              height={500}
              width={500}
            />
            <div className="portfolio-info">
              <h4>Entrena PRO</h4>
              <div>
                EntrenaPRO is an application to train with the professionals and
                sports centers of your city, at the best price and with the most
                qualified professionals.
              </div>
              <a
                href="/portfolio/portfolio-1.jpeg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 1"
              >
                <i className="bx bx-plus"></i>
              </a>
              <a
                href="portfolio-details.html"
                data-gallery="portfolioDetailsGallery"
                data-glightbox="type: external"
                className="portfolio-details-lightbox details-link"
                title="Portfolio Details"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img
              src="/portfolio/track-247.jpg"
              className="img-fluid"
              alt=""
              height={450}
              width={450}
            />
            <div className="portfolio-info portfolio-info1">
              <h4>247 Track</h4>
              <div>
                Vehicle Tracking Application for 247Track Pakistan. That app
                provide latest location as well as Trip History for specific
                time. The app provide customers to send commands to their
                vehicle for location, enable/disable engine etc.
              </div>
              <a
                href="/assets/img/portfolio/track-247.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="Web 3"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="/portfolio/track-247.jpg"
              className="img-fluid"
              alt=""
              height={450}
              width={450}
            />
            <div className="portfolio-info">
              <h4>Bamrec</h4>
              <div>
                Explore the upcoming events, parents can register their kids for
                some of them! They can see their kids activities during events
                and much more.
              </div>
              <a
                href="assets/img/portfolio/BamrecApp.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 2"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <img
              src="/portfolio/img1.jpg"
              className="img-fluid"
              alt=""
              height={450}
              width={450}
            />
            <div className="portfolio-info">
              <h4>MovieHax</h4>
              <div>
              MovieHax is a cutting-edge web application designed to provide users with an
              immersive experience in exploring the world of movies and TV shows. Leveraging
              the power of the TMDB Movies API, MovieHax offers a comprehensive platform
              where users can effortlessly discover the latest, top-rated, and upcoming titles
              across various genres
              </div>
              <a
                href="assets/img/portfolio/BamrecApp.jpg"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 2"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
