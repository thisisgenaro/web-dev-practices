            function themeShifter(){
                
            selector = document.getElementById("theme-selector").value;
                
                if(selector <= 8)
                {
                    document.getElementById("theme").href="theme-main.css";
                    document.getElementById("theme-selector").value = 1;
                }
                
                else if(selector <= 24)
                {
                    document.getElementById("theme").href="theme-dark.css";
                    document.getElementById("theme-selector").value = 16;
                }

                else if(selector <= 42)
                {
                    document.getElementById("theme").href="theme-white.css";
                    document.getElementById("theme-selector").value = 34;
                }
                
                else
                {
                    document.getElementById("theme").href="theme-highc.css";
                    document.getElementById("theme-selector").value = 50;
                }
            }