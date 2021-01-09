// import * as foo1 from "./foo1"

namespace ts {
    function foo2() {
        console.log("foo2")

        foo1();
    }

    foo2()
}