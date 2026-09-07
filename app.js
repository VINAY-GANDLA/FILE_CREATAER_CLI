const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const createFile = () => {
    return new Promise((resolve) => {
        rl.question("Enter the Filename:", (filename) => {
            const filepath = path.join(__dirname, filename);
            rl.question("Enter the Data:", (data) => {
                fs.writeFileSync(filepath, data, 'utf-8');
                console.log("File Created Successfully");
                resolve();
            });
            
        });
        
    })
}
const updateFile = () => {
    return new Promise((resolve) => {
        rl.question("Enter the Filename:", (filename) => {
            const filepath = path.join(__dirname, filename);
            if (fs.existsSync(filepath)) {
                const filepath = path.join(__dirname, filename);
                rl.question("Enter the data:", (data) => {
                    fs.appendFileSync(filepath, data, 'utf-8');
                    console.log("File Updated Successfully");
                    resolve();
                })
            }
            else {
                console.log("File didn't exist,Try again by creating it");
                resolve();
            }

        })
    })
}
const deleteFile = () => {
    return new Promise((resolve) => {
        rl.question("Enter the filename:", (filename) => {
            const filepath = path.join(__dirname, filename);
            if (fs.existsSync(filepath)) {
                fs.unlinkSync(filepath);
                console.log("File Deleted Successfully");
            }
            else {
                console.log("File didnt exist,you cant delete it");
            }
            resolve();
        })
    })
}
const handleinput = async(opt) => {
        if (opt == 1) {
            await createFile();
            show();
        }
        else if (opt == 2) {
            await updateFile();
            show();
        }
        else if (opt == 3) {
            await deleteFile();
            show();
        }
        else if (opt == 4) {
            console.log("Completed");
            rl.close();
        }
        else {
            console.log("Choosen Wrong option,Try again");
            show();
        }
}

const show = () => {
    console.log("\n1.CreateFile\n2.InsertData in File\n3.DeleteFile\n4.Exit");
    rl.question("Choose the Option:", (res) => {
        handleinput(res);
    });
}

show();