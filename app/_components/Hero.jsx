import Lookup from "../_data/Lookup";

export const Hero = () => {
  return (
    <div className="flex items-center flex-col mt-32 gap-5 ">
      <h2 className="text-5xl text-primary font-bold">{Lookup.HeroHeading}</h2>
      <h2 className="text-2xl font-bold">{Lookup.HeroSubheading}</h2>
      <p className="text-lg w-2/3 text-center text-slate-600">
        {Lookup.HeroDesc}
      </p>

      <div className="flex mt-5 gap-3 w-full max-w-2xl ">
        <input
          type="text"
          className="p-3 border rounded-md w-full shadow-md"
          placeholder={Lookup.InputTitlePlaceholder}
        />
        <button className="bg-primary text-white p-3 rounded-md shadow-md w-1/2 cursor-pointer">
          ¡Empezemos!
        </button>
      </div>
    </div>
  );
};
