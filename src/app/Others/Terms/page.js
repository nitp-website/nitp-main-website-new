import React from 'react';

const Disclaimer = () => {
  return (
    <div className="container mx-auto p-4 text-black md:p-40 md:pt-14 bg-white bg-opacity-50 font-semibold">
      <h1 className="text-3xl font-bold mb-4 text-red-800 text-center">Disclaimer</h1>
      <p>
        National Institute of Technology Patna (NITP) does not provide any
        guarantee for the accuracy and authenticity of contents within its
        website. The users of this site maintain full responsibility for their
        actions when using the information contained within this website. NIT
        Patna is in no way liable for any direct, indirect, special, punitive,
        incidental, exemplary or consequential damages whether in an action under
        contract, negligence, or any other theory arising out of or in connection
        with the use, inability to use, or performance of the information, products,
        services, contents or materials on this website. All persons working with
        NIT Patna, or on the NIT Patna website, are not liable for any damages
        arising from the use of the content contained within this site.
      </p>
      <p>
        The website is subject to periodic update and revision. National
        Institute of Technology Patna (NITP) maintains the right to delete or
        modify information on this website without prior notice. NIT Patna
        reserves the right to make changes to all technical aspects of this
        website including but not limited to the look and feel, navigation,
        design, architecture, tools, functionalities, features, applications,
        platform (and any other technical aspect of this website not mentioned
        above) without prior notice.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-red-800 text-center pt-4">Copyright</h2>
      <p>
        Material on this site is subject to copyright protection unless
        specified otherwise. Any proposed use of the material is subject to the
        approval of National Institute of Technology Patna (NITP). All content
        such as website design, text, graphics, photographs, videos, interface,
        unless otherwise indicated, are the copyright of National Institute of
        Technology Patna, all rights reserved. Reproduction of any content on
        this website, modification, distribution, or republication, or otherwise
        use for any public or commercial purpose without prior permission from
        NIT Patna is prohibited.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-red-800 text-center pt-4">Trademarks</h2>
      <p>
        Trademarks, service marks, and trade names (collectively the "marks")
        related to National Institute of Technology Patna also known as NIT Patna
        or NITP is the property of the Institute.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-red-800 text-center pt-4">Links to External Sites</h2>
      <p>
        A. The National Institute of Technology Patna (NITP) website
        www.nitp.ac.in may contain links to third party websites that are not
        owned or controlled by NITP. NITP has no control over, and assumes no
        responsibility for, the content, privacy policies, term of use or
        practices of any third party websites. In addition, NITP will not and
        cannot censor or edit the content of any third-party site. By using the
        service, you expressly relieve NITP from any and all liability arising
        from your use of any third-party website.
      </p>
      <p>
        Accordingly, we encourage you to be aware when you leave the service and
        to read the terms and conditions and privacy policy of each other website
        that you visit.
      </p>
      <p>
        C. Owners of third party sites own all of the content and information
        posted on their sites. We do not have any control on the matter put up in
        such cases and cannot vouch for the accuracy and authenticity of
        information appearing in these sites.
      </p>
      <h2 className="text-2xl font-bold mb-2 text-red-800 text-center pt-4">Contact Information</h2>
      <p className='text-center'>
        All requests for approval and permission may be sent to : 
        <a href="mailto:registrar@nitp.ac.in" className='text-red-950'> registrar@nitp.ac.in</a>
      </p>
    </div>
  );
};

export default Disclaimer;