<template>
  <svg
    class="sun-spin"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 55 55"
    fill="none"
  >
    <path
      d="M42.4734 27.5C42.4734 35.7696 35.7696 42.4734 27.5 42.4734C19.2304 42.4734 12.5266 35.7696 12.5266 27.5C12.5266 19.2304 19.2304 12.5266 27.5 12.5266C35.7696 12.5266 42.4734 19.2304 42.4734 27.5Z"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width="0.5"
    />
    <rect
      x="26.9362"
      y="44.9787"
      width="1.12766"
      height="9.02128"
      rx="0.56383"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width="0.1"
    />
    <rect
      x="26.9362"
      y="1"
      width="1.12766"
      height="9.02128"
      rx="0.56383"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width="0.1"
    />
    <rect
      x="5.51062"
      y="8.89362"
      width="1.12766"
      height="9.02128"
      rx="0.56383"
      transform="rotate(-53.6082 5.51062 8.89362)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width="0.1"
    />
    <rect
      x="6.68542"
      y="47.7502"
      width="1.12766"
      height="9.02128"
      rx="0.56383"
      transform="rotate(-135 6.68542 47.7502)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width="0.1"
    />
    <rect
      x="42.3931"
      y="13.9681"
      width="1.12766"
      height="9.02128"
      rx="0.56383"
      transform="rotate(-135 42.3931 13.9681)"
      fill="#E5D548"
      stroke="black"
      stroke-width="0.1"
    />
    <rect
      x="48.772"
      y="47.4109"
      width="1.12766"
      height="9.02128"
      transform="rotate(135 48.772 47.4109)"
      fill="#E5D548"
    />
    <rect
      x="44.9788"
      y="28.0638"
      width="1.12766"
      height="9.02128"
      rx="0.56383"
      transform="rotate(-90 44.9788 28.0638)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width="0.1"
    />
    <rect
      x="1"
      y="28.0638"
      width="1.12766"
      height="9.02128"
      rx="0.56383"
      transform="rotate(-90 1 28.0638)"
      fill="#E5D548"
      stroke="#1E1E1E"
      stroke-width="0.1"
    />
    <path
      d="M33.8885 18.265C33.5738 18.1553 33.4744 17.7429 33.7239 17.5219C33.842 17.4172 34.0098 17.3882 34.1554 17.449C36.1267 18.2718 37.1211 19.0628 37.7181 21.4484C37.7588 21.6108 37.7033 21.7817 37.578 21.8927C37.3183 22.1228 36.9066 21.9915 36.8121 21.6575C36.2726 19.7509 35.5457 18.8425 33.8885 18.265Z"
      fill="white"
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
