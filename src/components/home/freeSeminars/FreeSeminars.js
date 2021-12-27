const selectImage = (image, size) => './assets/seminarImages/' + image + "_" + size + ".jpg";

export const setImage = (image, width) => {
  if (width < 970) return selectImage(image, "mobile");
  if (width > 970) return selectImage(image, "tablet");
  if (width > 1100) return selectImage(image, "desktop");
}

export const content = {
    title: "Free Seminars",
    summary: "A.N.C Academy runs regular online seminars so that newcomers can experience what participating in sessions with us is like. Sign up below if you are interested in joining one of these sessions.",
    link: {
      linkLabel: "Find the Next Seminar",
      url: "seminars"
    }
  }

  export const cards = [
    {
      id: 0,
      cardTitle: "IFR Flying Introduction",
      imageSrc: "G1000-closeup",
      alt: "G1000 Close up",
    },
    {
      id: 1,
      cardTitle: "A320 Flying Introduction",
      imageSrc: "FCU-closeup",
      alt: "A320 FCU",
    },
    {
      id: 2,
      cardTitle: "VFR Navigation Introduction",
      imageSrc: "rainVFR",
      alt: "Single Engine flying close to rain",
    },
  ]