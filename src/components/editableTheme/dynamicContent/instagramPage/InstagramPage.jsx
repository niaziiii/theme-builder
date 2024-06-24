// InstagramPage.js

import React from 'react';

function InstagramPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className=" mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="overflow-hidden relative" style={{paddingBottom: '100%'}}>
          <iframe scrolling="no" aria-label="Instagram" class="w-100" height="542" src="https://www.instagram.com/odoo.official/embed"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstagramPage;
