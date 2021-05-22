const ZipMeUp = (yourDataFile) => {
	var zip = new JSZip();
	zip.file("yourFileName", yourDataFile);
	zip
		.generateAsync({
			type: "blob",
			compression: "DEFLATE",
			streamFiles: true,
			compressionOptions: {
				level: 6,
			},
		})
		.then((content) => {
			const reader = new FileReader();
			reader.onload = async (file) => {
				const result = reader.result;
				/**setUploadData is a react hook used to store the zipped data
				 * in this example. You can either store the data or call your
				 * POST request right from here. Up to you!
				 **/
				setUploadData(result);
			};
			reader.readAsDataURL(content);
		});
};
