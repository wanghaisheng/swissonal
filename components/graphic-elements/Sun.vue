<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="sun-spin"
    viewBox="0 0 55 55"
    fill="none"
  >
    <path
      d="M42.473 27.5c0 8.27-6.703 14.973-14.973 14.973S12.527 35.77 12.527 27.5 19.23 12.527 27.5 12.527 42.473 19.23 42.473 27.5Z"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width=".5"
    />
    <rect
      x="26.936"
      y="44.979"
      width="1.128"
      height="9.021"
      rx=".564"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width=".1"
    />
    <rect
      x="26.936"
      y="1"
      width="1.128"
      height="9.021"
      rx=".564"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width=".1"
    />
    <rect
      x="5.511"
      y="8.894"
      width="1.128"
      height="9.021"
      rx=".564"
      transform="rotate(-53.608 5.51 8.894)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width=".1"
    />
    <rect
      x="6.685"
      y="47.75"
      width="1.128"
      height="9.021"
      rx=".564"
      transform="rotate(-135 6.685 47.75)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width=".1"
    />
    <rect
      x="42.393"
      y="13.968"
      width="1.128"
      height="9.021"
      rx=".564"
      transform="rotate(-135 42.393 13.968)"
      fill="#E5D548"
      stroke="#000"
      stroke-width=".1"
    />
    <path
      fill="#E5D548"
      d="m48.772 47.41-.798.798-6.378-6.378.797-.798z"
    />
    <rect
      x="44.979"
      y="28.064"
      width="1.128"
      height="9.021"
      rx=".564"
      transform="rotate(-90 44.979 28.064)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width=".1"
    />
    <rect
      x="1"
      y="28.064"
      width="1.128"
      height="9.021"
      rx=".564"
      transform="rotate(-90 1 28.064)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width=".1"
    />
    <path
      d="M33.889 18.265c-.315-.11-.415-.522-.165-.743a.412.412 0 0 1 .431-.073c1.972.823 2.966 1.614 3.563 4a.449.449 0 0 1-.14.444.474.474 0 0 1-.766-.236c-.54-1.906-1.266-2.814-2.923-3.392Z"
      fill="#fff"
    />
  </svg>
</template>

<style lang="scss" scoped>
.sun-spin {
  animation: spin 8s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
