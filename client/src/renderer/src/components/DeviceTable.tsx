import React from 'react';
import dummyData from '../../../../resources/dummy-data/discovered-machines.json'
import { Device } from '@renderer/types';
import DeviceTableRow from './DeviceTableRow';
import '../main.css'

const devices: Device[] = [
    {
        "hostname": "server01.example.com",
        "ip_address": "192.168.1.2",
        "mac_address": "00:1A:2B:3C:4D:5E",
        "operating_system": "Ubuntu 18.04 LTS",
        "device_type": "Server",
        "network_segment": "VLAN1",
        "response_time": "4ms"
    },
    {
        "hostname": "workstation05.example.com",
        "ip_address": "192.168.1.34",
        "mac_address": "00:1A:2B:3C:4D:5F",
        "operating_system": "Windows 10 Pro",
        "device_type": "Workstation",
        "network_segment": "VLAN1",
        "response_time": "5ms"
    },
    {
        "hostname": "printer02.corp.example.com",
        "ip_address": "192.168.1.45",
        "mac_address": "00:1A:2B:3C:4D:60",
        "operating_system": "Embedded",
        "device_type": "Printer",
        "network_segment": "VLAN2",
        "response_time": "20ms"
    },
    {
        "hostname": "laptop09.remote.example.com",
        "ip_address": "192.168.1.78",
        "mac_address": "00:1A:2B:3C:4D:61",
        "operating_system": "macOS Catalina",
        "device_type": "Laptop",
        "network_segment": "VLAN3",
        "response_time": "10ms"
    },
    {
        "hostname": "router01.gateway.example.com",
        "ip_address": "192.168.1.1",
        "mac_address": "00:1A:2B:3C:4D:62",
        "operating_system": "Cisco IOS",
        "device_type": "Router",
        "network_segment": "VLAN1",
        "response_time": "2ms"
    },
    {
        "hostname": "nas03.storage.example.com",
        "ip_address": "192.168.1.25",
        "mac_address": "00:1A:2B:3C:4D:63",
        "operating_system": "FreeNAS",
        "device_type": "NAS",
        "network_segment": "VLAN2",
        "response_time": "15ms"
    },
    {
        "hostname": "switch04.core.example.com",
        "ip_address": "192.168.1.22",
        "mac_address": "00:1A:2B:3C:4D:64",
        "operating_system": "NX-OS",
        "device_type": "Switch",
        "network_segment": "VLAN2",
        "response_time": "3ms"
    },
    {
        "hostname": "dbserver02.data.example.com",
        "ip_address": "192.168.1.56",
        "mac_address": "00:1A:2B:3C:4D:65",
        "operating_system": "Windows Server 2019",
        "device_type": "Database Server",
        "network_segment": "VLAN3",
        "response_time": "8ms"
    },
    {
        "hostname": "firewall01.secure.example.com",
        "ip_address": "192.168.1.5",
        "mac_address": "00:1A:2B:3C:4D:66",
        "operating_system": "pfSense",
        "device_type": "Firewall",
        "network_segment": "VLAN1",
        "response_time": "1ms"
    },
    {
        "hostname": "mobile01.employee.example.com",
        "ip_address": "192.168.1.150",
        "mac_address": "00:1A:2B:3C:4D:67",
        "operating_system": "iOS 14",
        "device_type": "Mobile",
        "network_segment": "VLAN3",
        "response_time": "12ms"
    }
];

const NetworkTable = () => {
    return (<>
        <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Devices</h2>
            </header>
        <div className="p-3">
            <div className='overflow-x-auto'>
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Hostname</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">IP Address</div>
                        </th>
                        {/* <th className="px-4 py-2">MAC Address</th> */}
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Operating System</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Device Type</div>
                        </th>
                        {/* <th className="px-4 py-2">Network Segment</th> */}
                        <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-centerS">Response Time</div>
                        </th>
                    </tr>
                </thead>
                <tbody className='text-sm divide-y divide-gray-100'>
                    {devices.map(device => (
                        <DeviceTableRow key={device.ip_address} device={device}/>
                    ))}
                </tbody>
            </table></div>
        </div>
        </>
    );
}

export default NetworkTable;
