

const Footer = () => {
  
  return (
    <footer className="bg-gray-100 text-black py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center ">
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
