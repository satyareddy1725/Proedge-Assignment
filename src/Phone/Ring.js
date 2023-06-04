import React from "react";
const listRing = [{
  "id": 1,
  "first_name": "Peye",
  "phone": "+63 298 531 7220",
  "time": "6:26 PM",
  "date": "6/9/2022"
}, {
  "id": 2,
  "first_name": "Jent",
  "phone": "+63 495 493 8844",
  "time": "5:14 AM",
  "date": "3/29/2023"
}, {
  "id": 3,
  "first_name": "Gianulli",
  "phone": "+33 375 631 8082",
  "time": "4:39 AM",
  "date": "9/12/2022"
}, {
  "id": 4,
  "first_name": "Sewall",
  "phone": "+51 918 419 3802",
  "time": "11:17 AM",
  "date": "4/1/2023"
}, {
  "id": 5,
  "first_name": "Glanton",
  "phone": "+46 370 555 1391",
  "time": "6:44 AM",
  "date": "8/13/2022"
}, {
  "id": 6,
  "first_name": "Snookes",
  "phone": "+46 594 570 7815",
  "time": "6:08 PM",
  "date": "6/20/2022"
}, {
  "id": 7,
  "first_name": "Durrad",
  "phone": "+380 707 698 8887",
  "time": "7:15 PM",
  "date": "7/29/2022"
}, {
  "id": 8,
  "first_name": "Sharply",
  "phone": "+46 884 671 1545",
  "time": "11:19 PM",
  "date": "12/2/2022"
}, {
  "id": 9,
  "first_name": "Burcombe",
  "phone": "+44 927 966 8817",
  "time": "1:34 PM",
  "date": "11/8/2022"
}, {
  "id": 10,
  "first_name": "Burgis",
  "phone": "+63 809 608 1087",
  "time": "2:49 PM",
  "date": "8/6/2022"
}, {
  "id": 11,
  "first_name": "Ferronel",
  "phone": "+62 119 368 9186",
  "time": "5:40 AM",
  "date": "1/31/2023"
}, {
  "id": 12,
  "first_name": "Mounch",
  "phone": "+86 356 843 6134",
  "time": "1:50 AM",
  "date": "6/1/2023"
}, {
  "id": 13,
  "first_name": "Haken",
  "phone": "+86 987 127 6449",
  "time": "2:08 AM",
  "date": "1/19/2023"
}, {
  "id": 14,
  "first_name": "Bravington",
  "phone": "+55 669 514 2752",
  "time": "8:20 PM",
  "date": "10/7/2022"
}, {
  "id": 15,
  "first_name": "Cammish",
  "phone": "+86 559 418 1601",
  "time": "2:48 PM",
  "date": "9/28/2022"
}, {
  "id": 16,
  "first_name": "Dyne",
  "phone": "+218 293 564 7481",
  "time": "7:51 AM",
  "date": "6/19/2022"
}, {
  "id": 17,
  "first_name": "Pendell",
  "phone": "+1 615 728 1942",
  "time": "1:24 AM",
  "date": "11/9/2022"
}, {
  "id": 18,
  "first_name": "Henkmann",
  "phone": "+385 190 721 9049",
  "time": "12:58 PM",
  "date": "12/19/2022"
}, {
  "id": 19,
  "first_name": "Cowthard",
  "phone": "+86 167 371 7586",
  "time": "3:50 PM",
  "date": "6/25/2022"
}, {
  "id": 20,
  "first_name": "Dorset",
  "phone": "+66 833 534 1322",
  "time": "12:20 AM",
  "date": "10/29/2022"
}, {
  "id": 21,
  "first_name": "Fishe",
  "phone": "+48 943 253 7898",
  "time": "3:04 AM",
  "date": "8/4/2022"
}, {
  "id": 22,
  "first_name": "Marzele",
  "phone": "+7 408 779 0091",
  "time": "5:12 AM",
  "date": "12/4/2022"
}, {
  "id": 23,
  "first_name": "Bulch",
  "phone": "+86 404 210 0532",
  "time": "1:53 AM",
  "date": "8/24/2022"
}, {
  "id": 24,
  "first_name": "Ends",
  "phone": "+86 936 702 9629",
  "time": "8:35 AM",
  "date": "2/1/2023"
}, {
  "id": 25,
  "first_name": "Langham",
  "phone": "+63 239 135 5079",
  "time": "4:48 AM",
  "date": "8/24/2022"
}, {
  "id": 26,
  "first_name": "Emanueli",
  "phone": "+86 197 940 7031",
  "time": "12:40 PM",
  "date": "5/17/2023"
}, {
  "id": 27,
  "first_name": "Jereatt",
  "phone": "+7 760 939 1384",
  "time": "8:05 PM",
  "date": "1/16/2023"
}, {
  "id": 28,
  "first_name": "Bodell",
  "phone": "+502 412 193 8619",
  "time": "7:54 PM",
  "date": "1/25/2023"
}, {
  "id": 29,
  "first_name": "Luparti",
  "phone": "+86 902 306 9221",
  "time": "11:09 AM",
  "date": "7/18/2022"
}, {
  "id": 30,
  "first_name": "Gjerde",
  "phone": "+48 992 628 5075",
  "time": "1:49 PM",
  "date": "10/22/2022"
}];
const RingTone = () =>{
    return(
          <center>
            <table>
            {
              listRing.map((Ring)=>(
                <tr key={Ring.id} style={{display:'flex',justifyContent:"space-evenly", gap:'1rem',color:"red"}}>
                  <div id="totalA">
                    <td>{Ring.first_name}</td>
                    <td>{Ring.phone}</td>
                  </div>
                  <div id="totalB">
                    <td>{Ring.date}</td>
                    <td>{Ring.time}</td>
                  </div>
                </tr>
            ))}
            </table><br/>
          </center>
    )
}
export default RingTone