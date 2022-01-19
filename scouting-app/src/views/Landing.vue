<template>
    <section id="showcase" class="bg-dark text-light text-center text-small-center">
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>The Brand New <a href="iPhone.html" class="text-danger box-link"> <div>iPhone 13 Pro </div> </a> </h1>
            <p class="lead my-4">
              A dramatically more powerful camera system. An all‑new OLED display. The world’s fastest smartphone chip. A huge leap in battery life. This is the future.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-danger text-light p-5">
      <div class="container">
        <div class="d-md-flex justify-content-between align-items-center">
          <h3 class="mb-3 mb-md-0">Sign Up For Weekly Email Updates!</h3>
          <div id="enter-email" class="input-group">
            <input type="text" class="form-control" placeholder="Enter Email" />
            <button class="btn btn-dark btn-lg" type="button">Sign Up</button>
          </div>
        </div>
      </div>
    </section>  

    <section class="p-5">
        <div class="row text-center">
          <div class="col-md">
            <div class="card bg-light text-dark">
              <div class="card-body text-center">
                <h2 class="card-title mb-3"><div>Macbook Air</div>More Power. More Air.</h2>
                <p class="card-text">
                  Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <h2 class="card-title mb-3">
                  <div>iPad Air 4</div>
                  Powerful. Colourful. Wonderful.
                </h2>
                <p class="card-text px-5 ">
                  With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air. Use the second‑generation Apple Pencil to paint and illustrate with dynamic brushes and subtle shading. With the incredible versatility of iPad Air, you can work any way you want.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <h2 class="card-title mb-3">
                  iPad Mini
                  <div>Mega Power. Mini Size.</div>
                </h2>
                <p class="card-text px-5 ">
                  The iPad mini is meticulously designed to be absolutely beautiful. An all-new enclosure features a new edge-to-edge screen, along with narrow borders and elegant rounded corners.The 8.3-inch Liquid Retina display features True Tone, P3 wide colour and ultralow reflectivity, making text sharp and colours vivid, wherever you are.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md"> 
            <div id = "watch-card" class="card bg-light text-dark">
              <div class="card-body text-center">
                <h2 class="card-title mb-3">
                  <a href="https://www.apple.com/ca/apple-watch-series-7/" target="_blank" class="text-danger box-link"><div>Apple Watch Series 7</div></a>
                  Full Screen Ahead. 
                </h2>
                <p class="card-text px-5 ">
                  Always-On Retina display. A brighter view of you. You don’t need to raise your wrist or touch the screen to see the time or other information and complications on your watch face, because the display is always on. And now it’s 70% brighter indoors when your wrist is down.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>

    <contact id = "contact" class="p-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md">
            <h2 class="text-center mb-4">Contact Info</h2>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold text-danger">Headquarters Address:</span> 1 Apple Park Way, CA 95014
              </li>
              <li class="list-group-item">
                <span class="fw-bold text-danger">Headquarters Location:</span> Cupertino, California, The United States of America
              </li>
              <li class="list-group-item">
                <span class="fw-bold text-danger">Headquarters (US/CAN) Phone Number:</span> +1 (800) 692-7753
              </li>
              <li class="list-group-item">
                <span class="fw-bold text-danger">Apple Email:</span> appleid@id.apple.com
              </li>
            </ul>
          </div>
          <div class="col-md">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </contact>

    <footer class="pt-4 pb-3 bg-dark text-white text-center position-relative">
      <div class="container">
        <p class="lead">Copyright &copy; 2021 Apple Inc. All rights reserved.</p>
        <a href="#" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
</template>

<script>
export default {
  name: "Landing",
};
</script>
