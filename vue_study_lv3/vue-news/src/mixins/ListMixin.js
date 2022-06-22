import bus from "../utils/bus.js";
import { store } from "../store/index.js";

// export default {
//     // 재사용할 컴포넌트 옵션
//     created() {
//         console.log(this.$route.name)
//         bus.$emit("start:spinner");
//         this.$store
//             .dispatch("FETCH_LIST",this.$route.name)
//             .then(() => bus.$emit("end:spinner"))
//             .catch((err) => console.log(err));
//     },
// }

export const mixins= 
    (to, from, next) => {
        bus.$emit("start:spinner");
        setTimeout(()=>{
        store
          .dispatch("FETCH_LIST", to.name)
          .catch((err) => console.log(err));
      
        next();},300)
}