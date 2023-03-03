import "./styles/global.css";

import {
  InputHTMLAttributes,
  ReactNode,
  useId,
  useMemo,
  useState,
} from "react";
import categories from "./data/categories.json";
import initialProducts from "./data/products.json";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

function Input({ leftIcon, rightIcon, ...props }: InputProps) {
  const id = useId();

  return (
    <label htmlFor={id} className={`relative w-full bg-transparent`}>
      {leftIcon && (
        <div className="absolute top-1/2 left-3 -translate-y-1/2">
          {leftIcon}
        </div>
      )}

      <input
        id={id}
        className={`w-full rounded border border-rose-300 p-3 text-sm text-neutral-600 transition-colors focus-visible:border-rose-600 focus-visible:outline-none ${
          leftIcon ? "pl-12" : ""
        }`}
        {...props}
      />

      {rightIcon && (
        <div className="absolute top-1/2 right-3 -translate-y-1/2">
          {rightIcon}
        </div>
      )}
    </label>
  );
}

const format = (number: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "brl",
    minimumFractionDigits: 2,
  });

  const formattedValue = formatter
    .formatToParts(number)
    .reduce((result, part) => {
      const isFloatingDigit =
        part.type === "decimal" || part.type === "fraction";

      if (!isFloatingDigit) {
        return result + part.value;
      }

      return result;
    }, "");

  return formattedValue;
};

export const App = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  const products = useMemo(() => {
    return initialProducts
      .filter(({ categoryId }) =>
        category === null ? true : categoryId === category
      )
      .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));
  }, [initialProducts, category, search]);

  return (
    <>
      <header className="flex items-start bg-neutral-50 py-4 px-6">
        <strong className="font-bold text-rose-600">SugarRush</strong>
      </header>

      <section className="flex w-full items-center gap-2 bg-rose-200 py-2 px-6">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5_127)">
            <path
              d="M9.182 8.68196L6 11.864L2.818 8.68196C2.18867 8.05262 1.76009 7.2508 1.58646 6.37789C1.41284 5.50497 1.50195 4.60018 1.84255 3.77791C2.18315 2.95565 2.75992 2.25285 3.49994 1.75838C4.23996 1.26392 5.10999 1 6 1C6.89002 1 7.76004 1.26392 8.50006 1.75838C9.24008 2.25285 9.81686 2.95565 10.1575 3.77791C10.4981 4.60018 10.5872 5.50497 10.4135 6.37789C10.2399 7.2508 9.81133 8.05262 9.182 8.68196ZM6 6.49996C6.26522 6.49996 6.51957 6.3946 6.70711 6.20707C6.89464 6.01953 7 5.76518 7 5.49996C7 5.23474 6.89464 4.98039 6.70711 4.79285C6.51957 4.60532 6.26522 4.49996 6 4.49996C5.73479 4.49996 5.48043 4.60532 5.2929 4.79285C5.10536 4.98039 5 5.23474 5 5.49996C5 5.76518 5.10536 6.01953 5.2929 6.20707C5.48043 6.3946 5.73479 6.49996 6 6.49996Z"
              fill="#F43F5E"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_127">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-xs font-bold text-rose-500">
          São Paulo, Morumbi ·{" "}
          <span className="text-green-700">Aberto até as 19</span>
        </p>
      </section>

      <main className="flex flex-col gap-6 bg-neutral-50 p-6">
        <Input
          placeholder="Pesquise aqui"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          leftIcon={
            <button className="flex items-center justify-center rounded border border-transparent bg-rose-200 p-1 transition-colors hover:bg-rose-300 focus-visible:border-rose-500 focus-visible:outline-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H11"
                  stroke="#BE123C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 8H13"
                  stroke="#BE123C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 11L11 11"
                  stroke="#BE123C"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          }
          rightIcon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_140)">
                <path
                  d="M13.5233 12.4628L16.7355 15.6743L15.6743 16.7355L12.4628 13.5233C11.2678 14.4812 9.7815 15.0022 8.25 15C4.524 15 1.5 11.976 1.5 8.25C1.5 4.524 4.524 1.5 8.25 1.5C11.976 1.5 15 4.524 15 8.25C15.0022 9.7815 14.4812 11.2678 13.5233 12.4628ZM12.0187 11.9062C12.9706 10.9274 13.5022 9.61532 13.5 8.25C13.5 5.349 11.1503 3 8.25 3C5.349 3 3 5.349 3 8.25C3 11.1503 5.349 13.5 8.25 13.5C9.61532 13.5022 10.9274 12.9706 11.9062 12.0187L12.0187 11.9062Z"
                  fill="#525252"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_140">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        />

        <section className="flex flex-col gap-2">
          <h2 className="text-base text-neutral-700">O Que Deseja Comer?</h2>

          <ul className="flex w-full items-center gap-3 overflow-x-auto">
            {categories.map(({ id, name, image }) => (
              <li key={id} className="w-[150px] flex-shrink-0">
                <button
                  onClick={() => {
                    const isAlreadySelected = id === category;

                    isAlreadySelected ? setCategory(null) : setCategory(id);
                  }}
                  aria-label="Selecione sua categoria de comida"
                  data-id={id}
                  className={`flex w-full flex-col items-center gap-2 rounded border-2 border-transparent bg-zinc-200 py-3 px-2 transition-colors  focus-visible:outline-none
                  ${
                    category == id
                      ? "!border-rose-500 !bg-rose-50 hover:!bg-rose-100 focus-visible:!border-rose-600 focus-visible:!bg-rose-200"
                      : "border-transparent bg-transparent hover:bg-zinc-300 focus-visible:border-zinc-400"
                  }
                  `}
                >
                  <img src={image} width="36px" height="36px" alt="Img" />
                  <span
                    className={category === id ? "font-bold" : "font-normal"}
                  >
                    {name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <ul className="flex w-full flex-col flex-wrap gap-3 lg:flex-row">
          {products.length <= 0 && (
            <h4>Não encontramos nenhum produto {":("}</h4>
          )}
          {products.map(({ name, image, price, id }) => (
            <li className="w-full max-w-[400px]" key={id}>
              <a
                href="#"
                className="flex h-[180px] items-end justify-between rounded p-3"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("${image}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h3 className="text-lg font-bold text-neutral-50">{name}</h3>
                <span className="rounded bg-rose-200 py-1 px-2 font-bold text-rose-900">
                  {format(price / 100)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
