var hendleSelectUsers = function (e) {
    var gender = e.target.value;
    console.log(gender);
    if (gender) {
        try {
            axios.get("/get-users?gender=" + gender)
                .then(function (_a) {
                var data = _a.data;
                console.log(data);
                var root = document.querySelector('.root');
                var html = '';
                if (Array.isArray(data)) {
                    data.forEach(function (user) {
                        html += "<p>" + user.name + "</p>";
                    });
                    root.innerHTML = html;
                }
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        throw new Error("err");
    }
};
var hendleSelectAge = function (e) {
    var age = e.target.value;
    console.log(age);
    if (age) {
        try {
            axios.get("/get-users-slider?age=" + age)
                .then(function (_a) {
                var data = _a.data;
                console.log(data);
                var root2 = document.querySelector('.root2');
                var html = '';
                if (Array.isArray(data)) {
                    data.forEach(function (user) {
                        html += "<p>" + user.name + "</p>";
                    });
                    root2.innerHTML = html;
                }
                else {
                    throw new Error("err");
                }
            })["catch"](function (err) { return console.error(err); });
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        throw new Error("err");
    }
};
