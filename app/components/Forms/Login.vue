<template>
  <section class="login-form">
    <div class="text-field">
      <h1>เข้าสู่ระบบ</h1>
      <p>โปรดกรอกข้อมูลเพื่อเข้าใช้งาน</p>
    </div>

    <div class="field">
      <input
        ref="emailInput"
        v-model="email"
        @blur="checkEmptyEmail"
        @focus="ResetValidation.Email"
        type="email"
        placeholder=" "
        name="email"
        :class="inputValidation.email ? 'validate' : ''"
        required
      />
      <label for="email">อีเมลผู้ใช้</label>
    </div>

    <div class="field">
      <input
        v-model="password"
        @focus="ResetValidation.Password"
        type="password"
        placeholder=" "
        name="password"
        :class="inputValidation.password ? 'validate' : ''"
        required
      />
      <label for="password">รหัสผ่าน</label>
    </div>

    <div class="text-field margin-0">
      <p :class="loginResponse.code === '200' ? 'info success' : 'info'">
        {{ loginResponse.text }}
      </p>
    </div>

    <button
      :class="
        authComposable.isLoading.value ? 'login-btn loading' : 'login-btn'
      "
      v-on:click="login"
    >
      <span class="text">เข้าสู่ระบบ</span>
      <span class="loader"></span>
    </button>
  </section>
</template>

<script lang="ts" setup>
const authComposable = useAuthComposable();
const loginResponse = reactive({
  text: "",
  code: "401",
});

const inputValidation = reactive({
  email: false,
  password: false,
});

const emailInput = ref<HTMLInputElement | null>(null);

const email = ref<string>("");
const password = ref<string>("");

const RESPONSE_TEXTS: Record<string, string> = {
  "200": "เข้าสู่ระบบสำเร็จ!",
  "500": "เกิดข้อผิดพลาดกับเซิร์ฟเวอร์",
  "400": "เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้งในภายหลัง",
  "401": "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
};

async function login() {
  if (!emailInput.value!.checkValidity() || !password) {
    inputValidation.email = true;
    inputValidation.password = true;
    return;
  }

  loginResponse.code = await authComposable.login({
    email: email.value,
    password: password.value,
  });

  loginResponse.text =
    RESPONSE_TEXTS[loginResponse.code] ?? "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ";
}

function checkEmptyEmail() {
  inputValidation.email = !!email.value;
}

class ResetValidation {
  public static Email() {
    inputValidation.email = false;
  }

  public static Password() {
    inputValidation.password = false;
  }
}
</script>

<style>
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

.field input.validate:invalid {
  border: 2px solid var(--warning);
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
  font-size: 1.05rem;
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
  color: var(--error);
}

.text-field .info.success {
  color: var(--success);
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
