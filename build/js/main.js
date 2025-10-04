function init() {
  console.log("Js is running...");

  function windowSize() {
    let width = $(window).width();
    console.log(width);
    return width;
  }

  function montaShelf() {
    var arr = [
      {
        id: 1,
        name: "TV de tubo para games retro",
        currentPrice: 89.99,
        oldPrice: 129.99,
        image: "https://iili.io/KW6Qnuj.png",
      },
      {
        id: 2,
        name: "Zeldinha da massa para os nintendistas",
        currentPrice: 89.99,
        oldPrice: 129.99,
        image: "https://iili.io/KW6QxZQ.png",
      },
      {
        id: 3,
        name: "Controller Wireless DualSense X2u7445547",
        currentPrice: 89.99,
        oldPrice: 129.99,
        image: "https://iili.io/KW6QInV.png",
      },
      {
        id: 4,
        name: "Gaming Mouse RGB Pro",
        currentPrice: 89.99,
        oldPrice: 129.99,
        image: "https://iili.io/KW6Qu6P.png",
      },
      {
        id: 5,
        name: "TV de tubo para games retro",
        currentPrice: 89.99,
        oldPrice: 129.99,
        image: "https://iili.io/KW6Qnuj.png",
      },
    ];

    function renderShelf() {
      let windowWidth = $(window).width();
      let limit = arr.length;
      let isSlider = false;
      let sliderVisible = 1; // quantos itens visíveis no slider

      // regras
      if (windowWidth > 1248) {
        limit = 5;
      } else if (windowWidth <= 1248 && windowWidth > 997) {
        limit = 4;
      } else if (windowWidth <= 997 && windowWidth > 803) {
        limit = 3;
      } else if (windowWidth <= 803 && windowWidth > 760) {
        limit = 3;
      } else if (windowWidth <= 759 && windowWidth >= 568) {
        limit = 5;
        isSlider = true;
        sliderVisible = 2;
      } else if (windowWidth < 568) {
        limit = 5;
        isSlider = true;
        sliderVisible = 1;
      }

      let $ul = $(".shelf__container--body ul");
      $ul.empty();

      $.each(arr.slice(0, limit), function (i, item) {
        let prod = `
        <li class="shelf__item">
          <div class="shelf__container--body--productImage">
            <img src="${item.image}" alt="${item.name}" />
            <span class="flag">-30%</span>
          </div>
          <div class="shelf__container--body--productInfo">
            <span class="flag">
              <img src="https://iili.io/KW6Qq8u.png" alt="" />
            </span>
            <h3>${item.name}</h3>
            <span class="rating">
              <img src="../build/images/ratings.svg" alt="" />
            </span>
            <p class="price">
              <span class="currentPrice">R$ ${item.currentPrice}</span>
              <span class="oldPrice">R$ ${item.oldPrice}</span>
            </p>
            <button id="addProduct__${item.id}" class="addProduct">
              <img src="../build/images/cart-white.svg" alt="Carrinho" />
              Adicionar
            </button>
          </div>
        </li>
      `;
        $ul.append(prod);
      });

      // slider
      if (isSlider) {
        if (!$(".shelf__slider-controls").length) {
          $(".shelf__container--body ul").append(`
          <div class="shelf__slider-controls">
            <button class="shelf__prev"><img src="../build/images/chevronLeft.svg" width="25" height="25" alt="Carrinho" /></button>
            <button class="shelf__next"><img src="../build/images/chevronRight.svg" width="25" height="25" alt="Carrinho" /></button>
          </div>
        `);
        }

        let currentIndex = 0;
        let $items = $(".shelf__item");
        let total = $items.length;

        $items.hide();
        for (let i = 0; i < sliderVisible; i++) {
          $items.eq(i).show();
        }

        $(".shelf__prev")
          .off("click")
          .on("click", function () {
            $items.hide();
            currentIndex = (currentIndex - sliderVisible + total) % total;
            for (let i = 0; i < sliderVisible; i++) {
              $items.eq((currentIndex + i) % total).show();
            }
          });

        $(".shelf__next")
          .off("click")
          .on("click", function () {
            $items.hide();
            currentIndex = (currentIndex + sliderVisible) % total;
            for (let i = 0; i < sliderVisible; i++) {
              $items.eq((currentIndex + i) % total).show();
            }
          });
      } else {
        $(".shelf__slider-controls").remove();
        $(".shelf__item").show();
      }
    }

    renderShelf();

    $(window).on("resize", function () {
      renderShelf();
    });
  }

  function openMenuMobile() {
    $("#openMenu").on("click", function () {
      $(".nav--mobile").show();
      $("html").css("overflow", "hidden");
      $(".nav--mobile--relativeContent__inner").css("overflow", "scroll");
      $(".nav--mobile--relativeContent__inner").animate(
        { left: "0px" },
        500 // tempo da animação em ms
      );
    });
    $("#closeMenu").on("click", function () {
      $(".nav--mobile").hide();
      $("html").css("overflow", "auto");
      $(".nav--mobile--relativeContent__inner").css("overflow", "hidden");
      $(".nav--mobile--relativeContent__inner").animate(
        { left: "-1000px" },
        500 // tempo da animação em ms
      );
    });
  }

  function mobileAccordionMenu() {
    $(".collapseMenu").on("click", function () {
      $(this).children(".mobile__colappseNav").slideToggle();
    });
  }

  function adicionaCarrinho() {
    let cart_count = 0;
    $(".addProduct").on("click", function () {
      cart_count++;
      $(".counter").html(cart_count);
      $(this).text("Adicionado");
    });
  }

  function newsletterTrigger() {
    let message = "";
    $(".newsForm").on("submit", function (e) {
      e.preventDefault();
      let newsletterInput = $("#newsletter").val();
      if (newsletterInput.length <= 0) {
        message =
          "Por favor, insira seu email para se cadastrar em nossa newsletter!";
      } else {
        message = "Obrigado po se inscrever em nossa Newsletter!";
      }
      $("#message").html(message);
      $(".newsletterModalResult").css("display", "flex");

      $("#closeModal").on("click", function () {
        $(".newsletterModalResult").fadeOut();
      });
    });
  }

  windowSize();
  montaShelf();
  openMenuMobile();
  mobileAccordionMenu();
  adicionaCarrinho();
  newsletterTrigger();
}

init();
