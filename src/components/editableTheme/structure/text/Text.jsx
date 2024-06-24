import React from "react";

export default function Text() {
  return (
    <div className="flex flex-col gap-5 m-8">
      <div>
        <h1>
          Great stories have a <span className="font-bold">personality</span>. Consider telling a great story that
          provides personality. Writing a story with personality for potential
          clients will assist with making a relationship connection. This shows
          up in small quirks like word choices or phrases. Write from your point
          of view, not from someone else s experience.
        </h1>
      </div>

      <div>
        <h1>
          Great stories are <span className="font-bold">for everyone</span> even when only written <span className="font-bold">for just one
          person.</span> If you try to write with a wide, general audience in mind,
          your story will sound fake and lack emotion. No one will be
          interested. Write for one person. If it’s genuine for the one, it’s
          genuine for the rest.
        </h1>
      </div>
    </div>
  );
}
