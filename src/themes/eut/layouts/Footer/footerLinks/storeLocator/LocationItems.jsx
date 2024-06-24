"use client"

 function LocationItems({ name, address, phone, email, distance }) {
    return (
      <div className="flex flex-col justify-center py-3.5 pr-20 pl-2.5 border-b border-dashed border-stone-300 max-md:pr-5">
        <div className="text-lime-500">
          {name}
          <br />
          <span className="text-neutral-500">{address}</span>
        </div>
        {phone && (
          <div className="mt-7">
            <span className="text-gray-500"><b>Phone:</b></span> <span className="text-lime-400"> {phone}</span>
            <br />
            {email && <div className="text-gray-500"><span className="text-gray-500"><b>Email:</b></span> {email}</div>}
          </div>
        )}
        <div className="mt-6 text-gray-500">
          {distance} 
          <br />
          <span className="text-lime-400">Directions</span>
        </div>
      </div>
    );
}
  
export default LocationItems;