# Family-Tree

This is a simple React App which can be used to explore a family tree.

## Set-up
- Download the repository to your system
- Run `npm start` in the directory, to start the localhost

## Edit the familiy tree

To make changes to the family tree as per your wish,
- Open the `src\Assests\Family.json` file and this is file that should be edited.
- Each family member is alloted their own object. 
- The object name must be the name of the family member
- The obect of each family member must have the following keys
  - `Name` the value must be a string.
  - `Image` boolean data-type
    - If it is `true` then the image name, specified in `ImagePath` will be loaded.
    - If it is `false` then the 'Image Unavailable' from `src\Assests\No Image.jpg` will be loaded.
  - `ImagePath` a string value specifying the filename of the image, of the family member in `src\Assests\Images\`
  - `Father` the value must be string and there must be another family member in the `json` file, whose key is the value of this string. The value can also be `null` if member has no father.
  - `Mother` the value must be string and there must be another family member in the `json` file, whose key is the value of this string. The value can also be `null` if member has no mother.
  - `Sibling` the value must be an array, with each item being an string, with the name of the sibling and there must be another family member in the `json` file, whose key is the value of this string. The value can also be `null` if member has no siblings
  - `Spouse` the value must be string and there must be another family member in the `json` file, whose key is the value of this string. The value can also be `null` if member has no spouse.
  - `Children` the value must be an array, with each item being an string, with the name of the child and there must be another family member in the `json` file, whose key is the value of this string. The value can also be `null` if member has no children.
  - `About` a required string value, which contains a few words about the person.

- (Optional) add an image of the family member in the `src\Assests\Images\`, with the filename specified in the `ImagePath` key of the object

## Example
You can study the following example family tree, which is also given in `src\Assests\Family.json` but, with only a larger `About` section. 

Please note, that Talia al Ghul is not exactly Batman's spouse but, only to outline an example I have written so
```
{
    "Batman": {
        "Name": "Batman",
        "Image": true,
        "ImagePath": "Batman.jpg",
        "Father": "Thomas Wayne",
        "Mother": "Martha Wayne",
        "Sibling": ["Thomas Wayne, Jr"],
        "Spouse": "Talia al Ghul",
        "Children": ["Damian Wayne"],
        "About": "Batman is a superhero appearing in American comic books published by DC Comics. "
    },

    "Thomas Wayne, Jr": {
        "Name": "Thomas Wayne, Jr",
        "Image": false,
        "ImagePath": null,
        "Father": "Thomas Wayne",
        "Mother": "Martha Wayne",
        "Sibling": ["Batman"],
        "Spouse": null,
        "Children":  null,
        "About": "The eldest son of Dr. Thomas Wayne and his wife Martha (though one account claims he was actually the youngest), Thomas Wayne, Jr. was born three years before his brother Bruce."
    },

    "Ra's Al Ghul": {
        "Name": "Ra's Al Ghul",
        "Image": true,
        "ImagePath": "Ra's Al Ghul.jpg",
        "Father": null,
        "Mother": null,
        "Sibling": null,
        "Spouse": null,
        "Children":  ["Joker"],
        "About": "Ras al Ghul developed substantially into one of Batman's most enduring enemies and belongs to the collective of adversaries who compose Batman's rogues gallery"
    },

    "Thomas Wayne": {
        "Name": "Thomas Wayne",
        "Image": true,
        "ImagePath": "Thomas Wayne.jpg",
        "Father": null,
        "Mother": null,
        "Sibling": null,
        "Spouse": "Martha Wayne",
        "Children": ["Batman", "Thomas Wayne, Jr"],
        "About": "Thomas Alan Wayne, M.D. is a fictional character appearing in American comic books published by DC Comics."
    },
    "Martha Wayne": {
        "Name": "Martha Wayne",
        "Image": true,
        "ImagePath": "Martha Wayne.jpg",
        "Father": null,
        "Mother": null,
        "Sibling": null,
        "Spouse": "Thomas Wayne",
        "Children": ["Batman", "Thomas Wayne, Jr"],
        "About": "Martha Wayne  is a fictional character appearing in American comic books published by DC Comics"
    },
    "Talia al Ghul": {
        "Name": "Talia al Ghul",
        "Image": false,
        "ImagePath": null,
        "Father": "Ra's Al Ghul",
        "Mother": null,
        "Sibling": null,
        "Spouse": "Batman",
        "Children":  ["Damian Wayne"],
        "About": "Talia al Ghul  is a fictional character appearing in American comic books published by DC Comics"
    },
    "Damian Wayne": {
        "Name": "Damian Wayne",
        "Image": false,
        "ImagePath": null,
        "Father": "Batman",
        "Mother": "Talia al Ghul",
        "Sibling": null,
        "Spouse": null,
        "Children":  null,
        "About": "Damian Thomas Wayne is a fictional superhero and sidekick appearing in comic books published by DC Comics"
    }
}

```


