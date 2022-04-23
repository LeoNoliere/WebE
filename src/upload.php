$target_dir = "./userImg";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"]))
{
	$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
	if($check !== false)
	{
		if ($_FILES["fileToUpload"]["size"] < 500000)
		{
			if($imageFileType == "jpg" || $imageFileType == "png" || $imageFileType == "jpeg"
            || $imageFileType == "gif" )
            {
				if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file))
				{
					echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
				}
            }
		}
	}
}