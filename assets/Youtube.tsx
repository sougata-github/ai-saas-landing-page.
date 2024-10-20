import { twMerge } from "tailwind-merge";

const Youtube = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
    >
      <path
        d="M21.9684 7.0175C21.8801 6.67189 21.7109 6.35224 21.4747 6.08491C21.2385 5.81758 20.9421 5.61024 20.61 5.48C17.3962 4.23875 12.2812 4.25 12 4.25C11.7188 4.25 6.60375 4.23875 3.39 5.48C3.0579 5.61024 2.76153 5.81758 2.52534 6.08491C2.28915 6.35224 2.1199 6.67189 2.03156 7.0175C1.78875 7.95313 1.5 9.66313 1.5 12.5C1.5 15.3369 1.78875 17.0469 2.03156 17.9825C2.11977 18.3283 2.28895 18.6481 2.52515 18.9156C2.76136 19.1831 3.0578 19.3906 3.39 19.5209C6.46875 20.7088 11.2875 20.75 11.9381 20.75H12.0619C12.7125 20.75 17.5341 20.7088 20.61 19.5209C20.9422 19.3906 21.2386 19.1831 21.4748 18.9156C21.711 18.6481 21.8802 18.3283 21.9684 17.9825C22.2113 17.045 22.5 15.3369 22.5 12.5C22.5 9.66313 22.2113 7.95313 21.9684 7.0175ZM15.0553 13.1113L11.3053 15.7363C11.1931 15.8148 11.0616 15.8612 10.9249 15.8703C10.7883 15.8794 10.6517 15.851 10.5301 15.788C10.4085 15.725 10.3064 15.6299 10.235 15.513C10.1636 15.3962 10.1256 15.262 10.125 15.125V9.875C10.125 9.7378 10.1627 9.60324 10.2339 9.48597C10.3051 9.36869 10.4071 9.27319 10.5289 9.20987C10.6506 9.14655 10.7873 9.11783 10.9242 9.12683C11.0611 9.13584 11.1929 9.18222 11.3053 9.26094L15.0553 11.8859C15.154 11.9551 15.2345 12.047 15.2901 12.1539C15.3457 12.2608 15.3747 12.3795 15.3747 12.5C15.3747 12.6205 15.3457 12.7392 15.2901 12.8461C15.2345 12.953 15.154 13.0449 15.0553 13.1141V13.1113Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Youtube;
