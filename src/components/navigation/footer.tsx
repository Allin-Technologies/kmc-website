import Image from "next/image";
import Link from "next/link";
import logo from "public/logo/primary.png";

export function Footer() {
  return (
    <footer id='footer' className='border-t border-secondary'>
      <div className='max-w-screen-2xl mx-auto p-4  lg:py-12'>
        <div className='flex flex-col lg:grid grid-cols-4 gap-8'>
          <div className='prose'>
            <Link href='/'>
              <Image src={logo} alt='Logo' width={200} height={50} />
            </Link>
            <p className='opacity-70'>
              The Kingdom Millionaire Convention is a groundbreaking event designed to empower the Joshua Generation with tools, insights, and inspiration to achieve Financial Dominion, Marketplace Infiltration, and Position as Kingdom Financiers. 

            </p>
          </div>

          <div className='col-start-3 flex flex-col gap-6 md:grid grid-cols-3 col-span-3'>
            {navLinks.map((item, index) => (
              <div key={index} className='space-y-4'>
                <p className='opacity-70 cursor-default'>{item.label}</p>

                <ul className='space-y-2'>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-secondary p-4'>
        <div className='max-w-screen-2xl mx-auto text-center text-sm lg:text-base'>
          © Kingdom Millionaire Convention {new Date().getFullYear()}, All
          rights reserverd.
        </div>
      </div>
    </footer>
  );
}

const navLinks = [
  {
    label: "Home",
    links: [
      {
        label: "Agenda",
        url: "/#about",
      },
      {
        label: "Schedule",
        url: "/#schedule",
      },
    ],
  },
  {
    label: "Event",
    links: [
      {
        label: "Register",
        url: "/register",
      },
      {
        label: "Sponsorship",
        url: "/sponsor",
      },
      {
        label: "Volunteer",
        url: "/volunteer",
      },
    ],
  },
  {
    label: "Contact & Enquiries",
    links: [
      {
        label: "Send an email",
        url: "mailto:info@kingdommillionairesconvention.com",
      },
      {
        label: "Call us",
        url: "tel:+2348165708803",
      },
    ],
  },
];
