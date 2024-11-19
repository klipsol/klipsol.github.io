const MicrositeTab = ({ selectedTab }) => {
  return (
    <div className="max-w-3xl text-black mx-auto p-6 border-2 border-gray-500 rounded-2xl bg-white my-10">
      <p>
        We can create a dedicated shoppable microsite for you in no time which
        can be accessed independetly or integrated within your android or ios
        app in web view so that your user can shop without leaving the app.
      </p>
      <p className="my-8">
        Experience the microsite by clicking on the button bellow:
      </p>
      <a
        href="https://yourstore.dpanda.online/"
        target="_blank"
        className="bg-blue-500 text-white rounded-md p-2 hover:underline"
      >
        Shop
      </a>
    </div>
  );
};

export default MicrositeTab;
