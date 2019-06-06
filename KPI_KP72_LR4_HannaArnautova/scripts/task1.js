const imgChanger = {
  widthInput: document.getElementById("img_width"),
  heightInput: document.getElementById("img_height"),
  frameWidthInput: document.getElementById("img_frameWidth"),
  colorInput: document.getElementById("img_colorSelect"),
  altTextInput: document.getElementById("img_altText"),
  imageElement: document.getElementById("image"),
  submitButton: document.getElementById("submitButton"),

  isValid: true,

  changeBorderColor: function() {
    switch (this.colorInput.value) {
      case "1": {
        this.imageElement.className = "img_border img_border-blue";
        break;
      }
      case "2": {
        this.imageElement.className = "img_border img_border-blueviolet";
        break;
      }
      case "3": {
        this.imageElement.className = "img_border img_border-green";
        break;
      }
      case "4": {
        this.imageElement.className = "img_border img_border-red";
        break;
      }
      case "5": {
        this.imageElement.className = "img_border img_border-yellow";
        break;
      }
      case "6": {
        this.imageElement.className = "img_border img_border-black";
        break;
      }

      default:
        this.imageElement.className = "img_border";
        break;
    }
  },

  changeBorderSize: function() {
    console.log(this.frameWidthInput.value);
    this.imageElement.style.setProperty(
      "--border-width",
      this.frameWidthInput.value + "px"
    );
    console.log(this.imageElement.style);
  },

  changeImgSize: function() {
    this.imageElement.width = this.widthInput.value;
    this.imageElement.height = this.heightInput.value;
  },

  changeAlt: function() {
    this.imageElement.alt = this.altTextInput.value;
  },

  isValidNumberInput: function() {
    if (typeof this.widthInput.value != "number" || this.widthInput.value < 0) {
      this.widthInput.setCustomValidity("Невірне значення.");
      isValid = false;
    }
    if (
      typeof this.heightInput.value != "number" ||
      this.heightInput.value < 0
    ) {
      this.heightInput.setCustomValidity("Невірне значення.");
      isValid = false;
    }
    if (
      typeof this.frameWidthInput.value != "number" ||
      this.frameWidthInput.value < 0
    ) {
      this.frameWidthInput.setCustomValidity("Невірне значення.");
      isValid = false;
    }
    isValid = true;
  },

  isValidAltInput: function() {
    isLowerCase = function(symbol) {
      if ("a" <= symbol && symbol <= "z") {
        return true;
      }
      return false;
    };
    isUpperCase = function(symbol) {
      if ("A" <= symbol && symbol <= "Z") {
        return true;
      }
      return false;
    };

    let inputString = this.altTextInput.value;
    if (inputString === "") return false;
    for (var i = 0; i < inputString.length; i++) {
      if (!isLowerCase(inputString[i]) && !isUpperCase(inputString[i])) {
        return false;
      }
    }
    return true;
  }
};

window.addEventListener("load", function() {
  imgChanger.widthInput.value = imgChanger.imageElement.width;
  imgChanger.heightInput.value = imgChanger.imageElement.height;
});

imgChanger.submitButton.addEventListener("click", function() {
  if (imgChanger.isValidAltInput()) {
    if (imgChanger.isValid) {
      imgChanger.changeBorderColor();
      imgChanger.changeBorderSize();
      imgChanger.changeImgSize();
      imgChanger.changeAlt();
    }
  } else imgChanger.altTextInput.setCustomValidity("Містить не латинські символи");
});
