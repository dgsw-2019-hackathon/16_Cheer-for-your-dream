int bu;
int buch = 0;
int mo;

void setup() {
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(13, OUTPUT);
  
  Serial.begin(9600);
}
 
void loop(){
  bu = digitalRead(2);
  mo = digitalRead(3);

  if (bu == LOW) {  
    digitalWrite(13, HIGH);
    Serial.println("버튼눌림");
    Serial.write("1");
    delay(15000);
  } else {
    digitalWrite(13, LOW);
  }
  
  if (mo == HIGH) {  
    digitalWrite(13, HIGH);
    Serial.println("움직임");
    Serial.write("1");
    delay(15000);
  } 
  else {
    digitalWrite(13, LOW);
  }
}
