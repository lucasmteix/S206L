package questao1.agify;

import com.intuit.karate.junit5.Karate;

class AgifyRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("agify").relativeTo(getClass());
    }    

}
