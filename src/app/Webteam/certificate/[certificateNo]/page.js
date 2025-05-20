"use client"

import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import QRCode from "qrcode";

export default function CertificatePage() {
  const params = useParams();
  const pathname = usePathname();
  const certificateNo = params.certificateNo;
  
  const [certificate, setCertificate] = useState(null);
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [verificationUrl, setVerificationUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  // Define the certificate API URL similar to how webteamUrl is defined in Webteam page
  const certificateUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/certificate/${certificateNo}`;

  useEffect(() => {
    const fetchCertificateData = async () => {
      try {
        setLoading(true);
        // Use the defined URL variable
        const response = await axios.get(certificateUrl);
        
        if (response.data.certificate && response.data.member) {
          setCertificate(response.data.certificate);
          setMember(response.data.member);
        } else {
          setError("Certificate not found");
        }
      } catch (err) {
        console.error("Error fetching certificate:", err);
        setError("Failed to fetch certificate data");
      } finally {
        setLoading(false);
      }
    };

    if (certificateNo) {
      fetchCertificateData();
    }
    
    // Set the verification URL when the component mounts
    if (typeof window !== "undefined") {
      const url = window.location.href;
      setVerificationUrl(url);
      
      // Generate QR code for the certificate verification URL
      QRCode.toDataURL(url, { margin: 1, width: 120 })
        .then(url => {
          setQrCode(url);
        })
        .catch(err => {
          console.error("Error generating QR code:", err);
        });
    }
  }, [certificateNo, certificateUrl]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading certificate data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full border-2 border-red-600">
          <div className="text-center">
            <div className="bg-red-600 text-white py-4 px-6 mb-6">
              <h1 className="text-2xl font-bold">Certificate Verification Failed</h1>
            </div>
            <svg className="mx-auto h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-gray-900">{error}</h2>
            <p className="mt-2 text-gray-600">The certificate you're looking for could not be found or verified.</p>
            <div className="mt-6">
              <Link href="/Webteam" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700">
                Return to Web Team Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fullVerificationUrl = typeof window !== "undefined" 
    ? window.location.href 
    : `https://nitp.ac.in${pathname}`;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* Certificate Header */}
        <div className="bg-green-700 text-white py-8 px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">CERTIFICATE</h1>
          <h2 className="text-2xl font-semibold">OF APPRECIATION</h2>
        </div>
        
        {/* Certificate Content */}
        <div className="p-8 relative">
          {/* Decorative corner elements - can be added with pseudo-elements */}
          
          <div className="border-4 border-gray-200 p-8 rounded-lg relative z-10 bg-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">Certificate No: {certificate?.certificate_no}</h2>
              <p className="text-gray-600 mt-1">
                Generated on: {new Date(certificate?.generated_on).toLocaleDateString()}
              </p>
            </div>
            
            <div className="text-center mb-10">
              <p className="text-xl text-gray-800">THIS CERTIFICATE IS PROUDLY PRESENTED TO</p>
              <h3 className="text-4xl font-bold text-green-800 my-6 font-serif">{member?.name}</h3>
              <p className="text-xl text-gray-800">
                for being an active and dedicated member of the <span className="font-semibold">Web Development Cell</span>, NIT Patna,
                and for making remarkable contributions during the Academic Session 2023-2024.
              </p>
            </div>
            
            <div className="text-lg text-center text-gray-700 mb-8">
              <p>In recognition of {member?.role === 'volunteer' ? 'his/her' : 'his'} valuable contributions towards the design, 
                development, and continuous maintenance of the NIT Patna official website.</p>
              <p className="mt-3">We appreciate {member?.role === 'volunteer' ? 'his/her' : 'his'} commitment, technical expertise, 
                and teamwork in enhancing the digital presence of the institute.</p>
            </div>
            
            {/* Digital signatures section */}
            <div className="mt-16 flex justify-between items-end">
              <div className="text-center">
                <div className="relative">
                  <div className="text-lg italic font-medium text-blue-900 mb-2">Digitally signed by</div>
                  <div className="font-signature text-xl mb-1 text-blue-800">Pradip K. Jain</div>
                  <div className="h-0.5 w-40 bg-blue-500 mb-1 mx-auto"></div>
                  <div className="flex items-center justify-center gap-1">
                    <svg className="h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-blue-600">Verified</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">DIRECTOR, NIT PATNA</p>
                  <p className="text-xs text-gray-500">Date: {new Date(certificate?.generated_on).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="text-lg italic font-medium text-blue-900 mb-2">Digitally signed by</div>
                  <div className="font-signature text-xl mb-1 text-blue-800">B Balaji Naik</div>
                  <div className="h-0.5 w-40 bg-blue-500 mb-1 mx-auto"></div>
                  <div className="flex items-center justify-center gap-1">
                    <svg className="h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-blue-600">Verified</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">PROFESSOR IN CHARGE</p>
                  <p className="text-xs text-gray-500">Date: {new Date(certificate?.generated_on).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Member Details */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-800">Member Details</h3>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Verified ✓
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600">Name: <span className="font-medium text-gray-800">{member?.name}</span></p>
                <p className="text-gray-600">Email: <span className="font-medium text-gray-800">{member?.email}</span></p>
                <p className="text-gray-600">Role: <span className="font-medium text-gray-800">{member?.role === 'volunteer' ? 'Volunteer' : 'Professor In-Charge'}</span></p>
              </div>
              <div>
                <p className="text-gray-600">Year: <span className="font-medium text-gray-800">{member?.year}</span></p>
                <p className="text-gray-600">Designation: <span className="font-medium text-gray-800">{member?.desg || member?.designation}</span></p>
              </div>
            </div>
            
            {(member?.interests) && (
              <div className="mt-4">
                <p className="text-gray-600">Contributions:</p>
                <p className="font-medium text-gray-800 mt-1">{member?.interests}</p>
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-green-200 flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500">
                  This certificate can be verified at: {fullVerificationUrl}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Scan the QR code to verify certificate authenticity
                </p>
              </div>
              {/* Dynamic QR Code */}
              {qrCode ? (
                <div className="bg-white p-1 border border-gray-200 rounded-md">
                  <img 
                    src={qrCode} 
                    alt="Certificate Verification QR Code" 
                    className="w-24 h-24"
                  />
                </div>
              ) : (
                <div className="bg-white p-2 border border-gray-200 rounded-md w-24 h-24 flex items-center justify-center">
                  <span className="text-xs text-gray-400">Loading QR...</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/Webteam" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800">
              Back to Web Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 