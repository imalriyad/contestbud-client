const UpdateInfo = () => {
  return (
    <div>
      <div className="space-y-1 pt-4 px-4 text-sm">
        <label htmlFor="name" className="block text-2xl">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full border px-4 py-3 rounded-md "
        />{" "}
        <div className="pt-4">

        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
        </div>
      </div>
      
    </div>
  );
};

export default UpdateInfo;
