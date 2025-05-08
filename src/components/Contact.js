


import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// export default function Contact() {
//   return (
//     <>
//       <div className="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-lg" role="document">
//           <div className="w-100 pt-1 mb-5 text-right">
//             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <form action="" method="get" className="modal-content modal-body border-0 p-0">
//             <div className="input-group mb-2">
//               <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
//               <button type="submit" className="input-group-text bg-success text-light">
//                 <i className="fa fa-fw fa-search text-white"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="container-fluid bg-light py-5">
//         <div className="col-md-6 m-auto text-center">
//           <h1 className="h1">Contact Us</h1>
//           <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
//         </div>
//       </div>

//       {/* <div id="mapid" style="width: 100%; height: 400px;"></div> */}

//       {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" /> */}
//       {/* <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script> */}

//       {/* <script>
//         var map = L.map('mapid').setView([53.911535, 27.595715], 16);
    
       
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             maxZoom: 18,
//             attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//         }).addTo(map);
    
        
//         var locations = [
//             { lat: 53.911538, lng: 27.595848, title: "БГУИР Корпус №5, улица Платонова, 39" },
//             { lat: 53.912009, lng: 27.596813, title: "Улица Платонова, 41" },
//             { lat: 53.9108, lng: 27.5945, title: "Улица Гикало, 28" },
//             { lat: 53.911204, lng: 27.594033, title: "Улица Гикало, 26" },
//             { lat: 53.912441, lng: 27.594699, title: "БГУИР Корпус №4, улица Гикало, 9" }
//         ];
    
        
//         locations.forEach(function (loc) {
//             var marker = L.marker([loc.lat, loc.lng]).addTo(map);
    
            
//             marker.bindTooltip(loc.title, {
//                 permanent: false,
//                 direction: 'top'
//             });
    
            
//             marker.on('mouseover', function () {
//                 this.openTooltip();
//             });
    
//             marker.on('mouseout', function () {
//                 this.closeTooltip();
//             });
//         });
//     </script> */}

//       <div className="container py-5">
//         <div className="row py-5">
//           <form className="col-md-9 m-auto" method="post" role="form">
//             <div className="row text-center">
//               <div className=" col-md-6 mb-3">Phone number: +375 29 684 40 51</div>
//               <div className=" col-md-6 mb-3">Email: zayshopcompany5@gmail.com</div>
//               <div className="col-md-6 mb-3">Instagram: @zayshop_ecommerce</div>
//               <div className="col-md-6 mb-3">TikTok: zayshop</div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


export default function Contact() {
    const mapRef = useRef(null);
  
    useEffect(() => {
      // Инициализация карты
      const map = L.map(mapRef.current).setView([53.911535, 27.595715], 16);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data © OpenStreetMap contributors',
      }).addTo(map);
  
      const locations = [
        { lat: 53.911538, lng: 27.595848, title: "БГУИР Корпус №5, улица Платонова, 39" },
        { lat: 53.912009, lng: 27.596813, title: "Улица Платонова, 41" },
        { lat: 53.9108, lng: 27.5945, title: "Улица Гикало, 28" },
        { lat: 53.911204, lng: 27.594033, title: "Улица Гикало, 26" },
        { lat: 53.912441, lng: 27.594699, title: "БГУИР Корпус №4, улица Гикало, 9" }
      ];
  
    //   locations.forEach(loc => {
    //     const marker = L.marker([loc.lat, loc.lng]).addTo(map);
    //     marker.bindTooltip(loc.title, { permanent: false, direction: 'top' });
    //     marker.on('mouseover', function () { this.openTooltip(); });
    //     marker.on('mouseout', function () { this.closeTooltip(); });
    //   });
  
      return () => {
        map.remove(); // очистка при размонтировании
      };
    }, []);
  
    return (
      <>
        {/* ...ваш модал и хедер как есть... */}
  
        <div className="container-fluid bg-light py-5">
          <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Contact Us</h1>
            <p>
              Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
  
        {/* ✅ Контейнер для карты */}
        <div className="container mb-5">
          <div id="mapid" ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
        </div>
  
        {/* Контактная информация */}
        <div className="container py-5">
          <div className="row py-5">
            <form className="col-md-9 m-auto" method="post" role="form">
              <div className="row text-center">
                <div className="col-md-6 mb-3">Phone number: +375 29 684 40 51</div>
                <div className="col-md-6 mb-3">Email: zayshopcompany5@gmail.com</div>
                <div className="col-md-6 mb-3">Instagram: @zayshop_ecommerce</div>
                <div className="col-md-6 mb-3">TikTok: zayshop</div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
