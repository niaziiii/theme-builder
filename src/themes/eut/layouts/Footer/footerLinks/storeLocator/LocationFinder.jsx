"use client"

import LocationsList from "./LocationsList";
import SearchControls from "./SearchControls";

function LocationFinder() {
    return (
      <div className="flex flex-col justify-center items-center mx-auto my-2 w-full">
        <SearchControls />
        <div className="mt-3 max-md:max-w-full w-full">
          <div className="flex gap-5 max-lg:flex-col max-md:gap-0">
            <div className="flex flex-col lg:w-[33%] max-md:ml-0 max-md:w-full max-lg:order-2">
              <LocationsList />
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-lg:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.388579266931!2d-80.3090802!3d43.431599799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b88ef4e146063%3A0x5ab890f325163330!2s48%20Queen%20St%20E%2C%20Cambridge%2C%20ON%20N3C%202A8!5e0!3m2!1sen!2sca!4v1711741370726!5m2!1sen!2sca"
                title="Map showing location of health food stores"
                className="grow w-full aspect-[1.49] max-md:mt-1.5 max-lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LocationFinder;