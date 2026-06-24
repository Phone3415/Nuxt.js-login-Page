<template>
  <div>
    <FormsLogin />
  </div>
</template>

<style>
:root {
  --white: #fff;
  --white-subtle: hsl(0, 0%, 95%);
  --black: hsl(0, 0%, 12.5%);

  --accent: #d4d4d4;
  --focus: #6248f5;

  --error: #ff5d5d;
  --warning: #ff9d41;
  --success: #52f352;

  --box-shadow: 0px 4px 16px 8px rgba(0, 0, 0, 0.1);

  --text-black: #000;
  --text-white: hsl(0, 0%, 90%);
  --text-mute: hsl(0, 0%, 30%);
  --text-mute-light: hsl(0, 0%, 40%);

  --font-family: "Prompt", "Noto Sans Thai", "Kanit", sans-serif;

  --transition-time: 200ms ease-in-out;
}

body {
  width: 100%;
  height: 100dvh;

  box-sizing: border-box;
  background-color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;

  font-family: var(--font-family);
}

#__nuxt,
#__nuxt > div {
  display: flex;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
}
</style>
