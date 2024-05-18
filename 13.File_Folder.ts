//in tsconfig.json add below at last

/*
When we do tsc -w it will compile all the ts files but we can also use 
Exclude or Include Feature.
*/

/*

Exclude = tsc -w will compile all ts file but will ignore mentioned in Exclude.
"exclude": [
    "Folder_name",              //ignore only folder Folder_name
    "MyFile.ts",                //ignore only file MyFile.ts
    "Folder_name/MyFile.ts",    //ignore MyFile in folder Folder_name
    "* /temp.ts"                //ignore temp.ts file from every folder
]

*/


/*
 
Include = tsc -w will only compile ts file mentioned in Include and ignore other files.
"include": [
    xyz.ts
]

*/