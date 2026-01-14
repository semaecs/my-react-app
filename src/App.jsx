import React, { useState, useEffect } from 'react';

const mockData = [
  { id: 1, refNo: 'DQAQC00033712', jobNo: '', arrivalDate: '01/03/2025', importer: '', masterBL: '61546136171', houseBL: '5452511606' },
  { id: 2, refNo: 'ADBC600016752', jobNo: '6812-00199', arrivalDate: '18/12/2025', importer: 'บริษัท มิตซุย...', masterBL: 'RTCMASTER', houseBL: 'RTCHOUSE52' },
  { id: 3, refNo: 'ADBC600016751', jobNo: '6812-00198', arrivalDate: '18/12/2025', importer: 'บริษัท มิตซุย...', masterBL: 'RTCMASTER', houseBL: 'RTCHOUSE51' },
  { id: 4, refNo: 'ADBC600016750', jobNo: '6812-00197', arrivalDate: '18/12/2025', importer: 'บริษัท มิตซุย...', masterBL: 'RTCMASTER', houseBL: 'RTCHOUSE50' },
  { id: 5, refNo: 'ADBC600016743', jobNo: '6810-00191', arrivalDate: '17/09/2021', importer: 'บริษัท ทดสอบ จำกัด', masterBL: '', houseBL: '' },
  { id: 6, refNo: 'ADBC600016744', jobNo: '6810-00192', arrivalDate: '16/09/2021', importer: 'บริษัท ทดสอบ จำกัด', masterBL: '', houseBL: '' },
  { id: 7, refNo: 'ADBC600016745', jobNo: '6810-00193', arrivalDate: '16/09/2021', importer: 'บริษัท ทดสอบ จำกัด', masterBL: '', houseBL: '' },
  { id: 8, refNo: 'ADBC600016746', jobNo: '6810-00194', arrivalDate: '16/09/2021', importer: 'บริษัท ทดสอบ จำกัด', masterBL: '', houseBL: '' },
  { id: 9, refNo: 'ADBC600016747', jobNo: '6810-00195', arrivalDate: '16/09/2021', importer: 'บริษัท ทดสอบ จำกัด', masterBL: '', houseBL: '' },
  { id: 10, refNo: 'ADBC600016748', jobNo: '6810-00196', arrivalDate: '16/09/2021', importer: 'บริษัท ทดสอบ จำกัด', masterBL: '', houseBL: '' },
];

export default function ImportDeclarationSystem() {
  const [selectedRow, setSelectedRow] = useState(null);

  // --- ส่วนที่นำกลับมา: โหลด CSS อัตโนมัติ (แก้ปัญหาจอขาว) ---
  useEffect(() => {
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  // -----------------------------------------------------

  const handleRowClick = (row) => {
    setSelectedRow(row.id);
    // alert(`Click: ${row.refNo}`); 
  };

  // เพิ่ม w-screen เพื่อให้กว้างเต็มจอ
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100 text-sm font-sans overflow-hidden">

      {/* 1. Top Menu Bar */}
      <div className="bg-blue-200 border-b border-gray-400 px-2 py-1 flex space-x-4 shadow-sm select-none">
        {['ข้อมูลระบบ', 'Transaction', 'สิทธิประโยชน์', 'Report', 'Utility'].map((item) => (
          <a key={item} href="#" className="text-gray-800 hover:text-blue-700 hover:underline font-medium">
            {item}
          </a>
        ))}
      </div>

      {/* 2. Header & Company Info */}
      <div className="bg-blue-50 px-4 py-2 border-b border-gray-300 flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">หจก. เคเอสเอส ชิปปิ้ง แอนด์ ทรานสปอร์ต จำกัด</h1>
        <div className="bg-blue-600 text-white px-4 py-1 rounded shadow text-sm font-bold">
          OFF(NOTEBOOK)
        </div>
      </div>

      {/* 3. Filter / Control Panel */}
      <div className="bg-sky-100 p-2 border-b border-gray-300 space-y-2">
        <div className="flex justify-between items-start">

          {/* Left Side Controls */}
          <div className="flex flex-col gap-2 w-2/3">
            <div className="flex items-center gap-2">
              <label className="w-24 text-right font-semibold text-blue-900">Doc Status:</label>
              <select className="border border-gray-400 p-1 w-64 bg-white rounded-sm">
                <option>01 / WORKING PROCESS (ระหว่างดำเนินการ)</option>
              </select>
              <button className="bg-gray-100 border border-gray-400 px-2 py-0.5 rounded flex items-center gap-1 hover:bg-gray-200">
                📄 Create New Clearance
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label className="w-24 text-right font-semibold text-blue-900">ประเภทเอกสาร:</label>
              <div className="flex gap-1 items-center">
                <select className="border border-gray-400 p-1 w-40 bg-white rounded-sm">
                  <option>9 - ทั้งหมด</option>
                </select>
                <button className="bg-green-100 border border-green-600 px-2 text-green-800 hover:bg-green-200">Refresh</button>
              </div>
              <div className="ml-4">
                <button className="bg-orange-100 border border-orange-400 px-2 py-0.5 rounded flex items-center gap-1 hover:bg-orange-200">
                  📂 Create From EDI FLAT
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="w-24 text-right font-semibold text-blue-900">ค้นหาข้อมูล:</label>
              <select className="border border-gray-400 p-1 w-32 bg-white rounded-sm">
                <option>Reference</option>
              </select>
              <input type="text" className="border border-gray-400 p-1 w-48" />
              <button className="bg-blue-100 border border-blue-400 px-3 py-0.5 rounded flex items-center gap-1 hover:bg-blue-200">
                🔍 ค้นหา
              </button>
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex flex-col gap-1 items-end text-xs text-blue-900">
            <div className="flex items-center gap-2">
              <span>แสดงสูงสุด (รายการ)</span>
              <input type="number" defaultValue={999} className="border border-gray-400 w-16 text-right px-1" />
            </div>
            <div className="flex items-center gap-2">
              <span>Select Year</span>
              <input type="checkbox" defaultChecked />
              <select className="border border-gray-400"><option>2025</option></select>
            </div>
            <div className="flex items-center gap-2">
              <span>Select Month</span>
              <select className="border border-gray-400 w-24"><option>All</option></select>
            </div>
            <div className="flex items-center gap-2">
              <span>Show By Record Date</span>
              <input type="checkbox" defaultChecked />
              <input type="date" defaultValue="2025-12-26" className="border border-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Main Data Grid */}
      <div className="flex-1 overflow-auto bg-white border border-gray-300 m-2 relative">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-200 text-blue-900 sticky top-0 z-10 shadow-sm">
            <tr>
              <th className="p-1 border border-gray-300 w-8 text-center">#</th>
              <th className="p-1 border border-gray-300 min-w-[120px]">RefNo</th>
              <th className="p-1 border border-gray-300">Ecs Job No.</th>
              <th className="p-1 border border-gray-300">ArrivalDate</th>
              <th className="p-1 border border-gray-300">Declare No</th>
              <th className="p-1 border border-gray-300">เลขที่ Invoice</th>
              <th className="p-1 border border-gray-300">ImporterName</th>
              <th className="p-1 border border-gray-300">สาขา</th>
              <th className="p-1 border border-gray-300">UpdateBy</th>
              <th className="p-1 border border-gray-300">สาขาข้อมูล</th>
              <th className="p-1 border border-gray-300">ชื่อยานพาหนะ</th>
              <th className="p-1 border border-gray-300">Master B/L</th>
              <th className="p-1 border border-gray-300">House B/L</th>
              <th className="p-1 border border-gray-300 text-center">Doc Status</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => {
              // Logic สำหรับเลือกสีแถว
              const isSelected = selectedRow === row.id;
              const bgColor = isSelected ? 'bg-blue-300 text-blue-900 font-semibold' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-50');

              return (
                <tr
                  key={row.id}
                  className={`cursor-pointer border-b border-gray-200 text-sm hover:bg-blue-200 transition-colors duration-150 ${bgColor}`}
                  onClick={() => handleRowClick(row)}
                >
                  <td className="p-1 border border-gray-200 text-center"><input type="checkbox" /></td>
                  <td className={`p-1 border border-gray-200 ${!isSelected && 'text-blue-700'}`}>{row.refNo}</td>
                  <td className="p-1 border border-gray-200">{row.jobNo}</td>
                  <td className="p-1 border border-gray-200">{row.arrivalDate}</td>
                  <td className="p-1 border border-gray-200"></td>
                  <td className="p-1 border border-gray-200"></td>
                  <td className="p-1 border border-gray-200">{row.importer}</td>
                  <td className="p-1 border border-gray-200 text-center">0000</td>
                  <td className="p-1 border border-gray-200">ECS ผู้ดูแลระบบ</td>
                  <td className="p-1 border border-gray-200 text-center">210</td>
                  <td className="p-1 border border-gray-200"></td>
                  <td className="p-1 border border-gray-200">{row.masterBL}</td>
                  <td className="p-1 border border-gray-200">{row.houseBL}</td>
                  <td className="p-1 border border-gray-200 text-center">0</td>
                </tr>
              );
            })}
            {/* Mock empty rows */}
            {[...Array(10)].map((_, i) => (
              <tr key={`empty-${i}`} className="h-6"><td colSpan="14" className="border border-gray-100"></td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-2 text-xs text-blue-800 font-bold mb-1">
        จำนวนรายการ - 61
      </div>

      {/* 5. Footer Actions & Status */}
      <div className="bg-blue-100 p-2 border-t border-gray-400">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-2">
            <button className="bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-500 px-3 py-1 rounded shadow-sm hover:bg-gray-200 flex items-center gap-1">
              ✉️ Send To Sign
            </button>
            <button className="bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-500 px-3 py-1 rounded shadow-sm hover:bg-gray-200 flex items-center gap-1">
              🖥️ Check Network Status
            </button>

            <div className="flex gap-4 ml-4 items-center font-bold text-green-600 text-lg">
              <span>RTC</span>
              <span>NSW</span>
              <span>TSM1</span>
              <span>TSM2</span>
              <span>ECS</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-1 rounded border border-gray-300">
            <span className="text-xs font-bold text-gray-700">Transfer Type</span>
            <select className="border border-gray-300 text-sm">
              <option>Import From Zip</option>
            </select>
            <button className="bg-blue-600 text-white px-3 py-0.5 rounded shadow-sm font-bold">GO</button>
          </div>
        </div>

        {/* 6. Footer Log Table */}
        <div className="bg-white border border-gray-400 h-24 overflow-y-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="border-r border-b px-2 py-1 w-16">Item</th>
                <th className="border-r border-b px-2 py-1 w-24">MsgType</th>
                <th className="border-r border-b px-2 py-1 w-32">DocNo</th>
                <th className="border-r border-b px-2 py-1 w-24">Code</th>
                <th className="border-r border-b px-2 py-1">Message</th>
                <th className="border-b px-2 py-1 w-32">RespDate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan="6" className="p-2 text-gray-400 italic text-center">No logs available</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}