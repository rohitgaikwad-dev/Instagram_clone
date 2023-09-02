const story = () => {
  const stories = document.querySelector(".stories");
  const fullscreen = document.querySelector(".fullscreen");
  const growth = document.querySelector(".growth");
  const close = document.querySelector(".close");

  let arr = [
    {
      dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      img: "https://images.unsplash.com/photo-1545912453-3d32e20f72bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      img: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      dp: "https://images.unsplash.com/photo-1604681742095-dd1ccc5e4900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80",
      img: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80",
    },
    {
      dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      img: "https://images.unsplash.com/photo-1605076896228-086cda8868c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      dp: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      img: "https://images.unsplash.com/photo-1693129855805-70807d8a4ec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1892&q=80",
    },
  ];

  let clutter = "";

  arr.forEach((elem, index) => {
    clutter += `<div class="story">
    <div class="overlay"></div>
    <img id='${index}' src="${elem.dp}"
        alt="">
</div>`;
  });

  stories.innerHTML = clutter;

  let grow = 0;
  stories.addEventListener("click", (dets) => {
    fullscreen.style.display = "initial";
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].img})`;

    setTimeout(() => {
      fullscreen.style.display = "none";
    }, 3000);

    if (grow <= 100) {
      setInterval(() => {
        growth.style.width = `${grow++}%`;
      }, 30);
    } else {
      grow = 0;
    }
  });

  close.addEventListener("click", () => {
    fullscreen.style.display = "none";
  });
};
story();

const post = () => {
  const postImg = document.querySelector(".post_img");
  const heart = document.querySelector(".ri-heart-fill");
  const redHeart = document.querySelector("#heart");

  let flag = 0;
  redHeart.addEventListener("click", () => {
    if (flag === 0) {
      redHeart.className = "ri-heart-line";
      redHeart.style.color = "black";
      flag = 1;
    } else {
      redHeart.className = "ri-heart-fill";
      redHeart.style.color = "red";
      flag = 0;
    }
  });

  postImg.addEventListener("dblclick", () => {
    heart.style.opacity = "0.8";
    redHeart.className = "ri-heart-fill";
    redHeart.style.color = "red";
    setTimeout(() => {
      heart.style.opacity = "0";
    }, 1500);
  });
};
post();
