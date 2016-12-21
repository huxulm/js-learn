/**
 * Created by Dell on 2016/12/21.
 */
try {
    console.log(decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"));

    // throw error
    decodeURIComponent("%E0%A4%A");
} catch (e) {
    console.error(e);
}