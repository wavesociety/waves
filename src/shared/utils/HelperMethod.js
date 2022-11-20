import { useEffect, useState } from "react";

export function RemoveDash(str) {
  return str.split("-").join(" ");
}

export function WindowPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}

export function Capitalization(str) {
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }

  return arr.join(" ");
}

export function AtTheTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export function ToLink(title) {
  return title.toLowerCase().split(" ").join("-");
}

export function ToPricing(price) {
  var internationalNumberFormat = new Intl.NumberFormat("en-US");
  return internationalNumberFormat.format(price);
}

export function RandomVideo() {
  var videoId = ["gyFvRPh64Y8", "r962efLLOvA"];
  var randomIndex = Math.floor(Math.random() * videoId.length);
  return videoId[randomIndex];
}

export function RandomColor() {
  var cc =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
  return cc;
}

export function WindowWidth() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return windowSize.innerWidth;
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
