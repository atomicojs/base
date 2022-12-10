import { c, Props, css } from "atomico";

function brand({ color, width }: Props<typeof brand>) {
  return (
    <host>
      <svg
        width={width}
        style="display:inline-block"
        viewBox="0 0 287.407 86.961"
      >
        <g transform="translate(-331.97 -291.125)">
          <g transform="translate(321.97 336.23) rotate(-45)">
            <path
              d="M12.46,13.481a13.426,13.426,0,0,1-1.819-.124L1.962,4.681c.92.19,1.862.341,2.8.447L13.1,13.466C12.888,13.476,12.672,13.481,12.46,13.481Zm2.554-.246L7.084,5.3c.406.016.821.024,1.234.024.373,0,.75-.006,1.121-.02l7.425,7.425a13.343,13.343,0,0,1-1.851.5ZM7.763,12.63A13.206,13.206,0,0,1,3.047,9.583,13.212,13.212,0,0,1,0,4.866L7.764,12.63Zm10.612-.53L11.45,5.175c.692-.069,1.389-.162,2.075-.277l6.339,6.339a13.261,13.261,0,0,1-1.488.865Zm2.709-1.788L15.316,4.543c.623-.143,1.25-.307,1.863-.488l5.1,5.1c-.13.143-.268.287-.408.427-.253.253-.519.5-.788.728Zm2.162-2.334h0L18.8,3.529c.565-.2,1.135-.423,1.692-.66l3.666,3.666a13.279,13.279,0,0,1-.908,1.441Zm1.594-2.9h0L21.965,2.2c.519-.252,1.038-.524,1.545-.807L25.4,3.286a13.317,13.317,0,0,1-.562,1.787Zm.871-3.627h0L24.859.594c.3-.19.611-.389.913-.594a13.435,13.435,0,0,1-.06,1.447Z"
              transform="translate(21.134 55.622)"
              fill={color}
            />
            <path
              d="M29.6,59.192a29.813,29.813,0,0,1-5.966-.6,29.434,29.434,0,0,1-10.583-4.453A29.685,29.685,0,0,1,2.326,41.117,29.444,29.444,0,0,1,.6,35.562a29.891,29.891,0,0,1,0-11.939A29.429,29.429,0,0,1,5.055,13.048,29.685,29.685,0,0,1,18.076,2.326,29.447,29.447,0,0,1,23.631.6,29.859,29.859,0,0,1,36.69.856,29.505,29.505,0,0,1,48.814,7.088a29.805,29.805,0,0,1,4.625,4.971,18.694,18.694,0,0,0,0,35.078,29.734,29.734,0,0,1-10.273,8.77A29.464,29.464,0,0,1,29.6,59.192Z"
              transform="translate(0 0)"
              fill={color}
            />
            <path
              d="M9.792,31.852H23.54a16.714,16.714,0,0,1-13.748,0ZM6.6,29.953a16.774,16.774,0,0,1-2.275-2.082H29a16.774,16.774,0,0,1-2.275,2.082ZM2.838,25.971a16.655,16.655,0,0,1-1.2-2.082H31.688a16.641,16.641,0,0,1-1.2,2.082ZM.869,21.989a16.534,16.534,0,0,1-.553-2.082h32.7a16.563,16.563,0,0,1-.553,2.082ZM.053,18.008Q0,17.344,0,16.666q0-.372.016-.739h33.3q.016.367.016.739,0,.677-.053,1.342Zm.154-3.982a16.579,16.579,0,0,1,.47-2.082H32.653a16.57,16.57,0,0,1,.47,2.082Zm1.159-3.982A16.614,16.614,0,0,1,2.447,7.963H30.879a16.645,16.645,0,0,1,1.081,2.082Zm2.44-3.982A16.771,16.771,0,0,1,5.855,3.982H27.476a16.759,16.759,0,0,1,2.048,2.082ZM8.593,2.082a16.692,16.692,0,0,1,16.144,0Z"
              transform="translate(43.232 12.774)"
              fill={color}
            />
          </g>
          <path
            d="M27.725-47.09h4.524L20.421-79.745H15.473L3.6-47.09H8.122L10.759-54.4H25.086ZM23.861-57.881H11.987l5.937-16.587Zm14.514,3.723c0,5.183,2.594,7.068,7.163,7.068H49.4v-3.628H46.245c-2.637,0-3.581-.9-3.581-3.44v-15.22H49.4v-3.534h-6.74v-6.5H38.375v6.5H35.029v3.534h3.346Zm40.713-5.89c0-8.152-5.7-13.288-13.053-13.288-7.306,0-13.053,5.136-13.053,13.288,0,8.2,5.56,13.383,12.864,13.383C73.2-46.666,79.088-51.849,79.088-60.048Zm-21.723,0c0-6.5,4.1-9.566,8.623-9.566,4.429,0,8.718,3.063,8.718,9.566,0,6.55-4.382,9.613-8.859,9.613s-8.482-3.063-8.482-9.613ZM122.016-47.09h4.241V-62.31c0-7.4-4.571-11.074-10.462-11.074a9.559,9.559,0,0,0-9.142,5.75c-1.7-3.864-5.231-5.75-9.471-5.75A9.336,9.336,0,0,0,89.03-69.19v-3.723H84.742V-47.09H89.03V-61.321c0-5.56,2.969-8.341,7.306-8.341,4.241,0,7.068,2.686,7.068,7.964V-47.09h4.241V-61.321c0-5.56,2.969-8.341,7.306-8.341,4.241,0,7.068,2.686,7.068,7.964Zm11.262,0h4.288V-72.913h-4.288Zm2.215-30.017a2.857,2.857,0,0,0,2.024-.87,2.857,2.857,0,0,0,.8-2.051,2.857,2.857,0,0,0-.8-2.051,2.857,2.857,0,0,0-2.024-.87,2.877,2.877,0,0,0-2.079.842,2.877,2.877,0,0,0-.842,2.079,2.877,2.877,0,0,0,.842,2.079A2.877,2.877,0,0,0,135.493-77.106Zm7.775,17.058c0,8.2,5.231,13.383,12.58,13.383,6.41,0,10.6-3.58,11.923-8.718h-4.618c-.942,3.251-3.487,5.089-7.3,5.089-4.712,0-8.2-3.346-8.2-9.754,0-6.314,3.487-9.66,8.2-9.66,3.817,0,6.409,1.979,7.3,5.089h4.618c-1.32-5.419-5.513-8.718-11.922-8.718-7.351,0-12.582,5.183-12.582,13.288Zm54.708,0c0-8.152-5.7-13.288-13.053-13.288-7.306,0-13.053,5.136-13.053,13.288,0,8.2,5.561,13.383,12.864,13.383C192.087-46.666,197.976-51.849,197.976-60.048Zm-21.723,0c0-6.5,4.1-9.566,8.623-9.566,4.429,0,8.718,3.063,8.718,9.566,0,6.55-4.382,9.613-8.859,9.613S176.253-53.5,176.253-60.048Z"
            transform="translate(411.401 397.056)"
            fill={color}
          />
        </g>
      </svg>
    </host>
  );
}

brand.props = {
  color: {
    type: String,
    value: "#232323",
    reflect: true,
  },
  width: {
    type: String,
    value: "20rem",
    reflect: true,
  },
  message: {
    type: String,
    value: "Message...",
  },
};

brand.styles = css`
  :host {
    width: 200px;
  }
`;

export const Brand = c(brand);

customElements.define("atomico-brand", Brand);