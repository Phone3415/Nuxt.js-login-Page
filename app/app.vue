<template>
  <section class="login-form">
    <div class="text-field">
      <h1>เข้าสู่ระบบ</h1>
      <p>โปรดกรอกข้อมูลเพื่อเข้าใช้งาน</p>
    </div>

    <div class="field">
      <input type="email" placeholder=" " name="email" />
      <label for="email">อีเมลผู้ใช้</label>
    </div>

    <div class="field">
      <input type="password" placeholder=" " name="password" />
      <label for="password">รหัสผ่าน</label>
    </div>

    <div class="text-field margin-0">
      <p class="info">{{ loginState.content }}</p>
    </div>

    <button
      :class="loginState.loading ? 'login-btn loading' : 'login-btn'"
      v-on:click="login"
    >
      <span class="text">เข้าสู่ระบบ</span>
      <span class="loader"></span>
    </button>
  </section>
</template>

<script lang="ts" setup>
const loginState = reactive({
  content: "",
  loading: false,
});

function login() {
  loginState.content = "เกิดข้อผิดพลาด โปรดรีเฟรชหน้าเว็บไซต์";
  loginState.loading = !loginState.loading;
}
</script>

<style>
:root {
  --white: #fff;
  --white-subtle: hsl(0, 0%, 95%);
  --black: hsl(0, 0%, 12.5%);

  --accent: #d4d4d4;
  --focus: #6248f5;
  --warning: #ff5d5d;

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

#__nuxt {
  display: flex;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
}

.login-form {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 25%;

  gap: 1.25rem;
  padding: 2rem;

  border-radius: 16px;
  box-shadow: var(--box-shadow);
}

.text-field {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 0.5rem;
  margin-bottom: 1rem;
}

.text-field.margin-0 {
  margin-bottom: 0;
}

.text-field h1,
.text-field p {
  margin-top: 0;
  margin-bottom: 0;
}

.field {
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
}

.field label {
  position: absolute;
  top: 0;
  left: 5%;

  transform: translateY(calc(50% + 3px));
  padding: 0 0.2rem;

  color: var(--text-mute);
  transition: all var(--transition-time);
}

.field input {
  background: transparent;

  outline: none;
  box-shadow: none;

  -webkit-tap-highlight-color: transparent;
  border: 2px solid var(--accent);

  padding: 1rem;
  font-size: 1.05rem;

  transition: border var(--transition-time);
}

.field input:focus {
  border: 2px solid var(--focus);
}

.field input:focus + label,
.field input:not(:placeholder-shown) + label {
  transform: translateY(-50%);
  font-size: 1.1rem;

  color: var(--text-black);
  background: var(--white);
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  box-shadow: inset 0 0 20px 20px var(--white);
}

.login-btn {
  display: flex;

  justify-content: center;
  align-items: center;

  background: var(--focus);
  color: var(--white);

  -webkit-tap-highlight-color: transparent;

  width: 50%;
  padding: 1rem;

  cursor: pointer;

  border: none;
  border-radius: 6px;

  font-family: var(--font-family);
  font-size: 1rem;
  box-shadow: 0px 4px 16px 4px rgba(0, 0, 0, 0.1);

  transition: transform var(--transition-time);
}

.login-btn:hover,
.login-btn:focus-visible {
  transform: translateY(-2px);
}

.loader {
  width: 0;
  height: 0;
  border: none;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.login-btn.loading .loader {
  width: 25px;
  height: 25px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-bottom-color: var(--white);
}

.login-btn.loading .text {
  display: none;
}

.text-field .info {
  color: var(--warning);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
