import pyttsx3
import googletrans
import speech_recognition as sr

engine = pyttsx3.init()
translator = googletrans.Translator()

langset = {
    "english": "en",
    "spanish": "es",
    "french": "fr",
    "german": "de",
    "chinese": "zh-CN",
    "japanese": "ja",
    "korean": "ko",
    "hindi": "hi",
    "arabic": "ar",
    "russian": "ru",
    "portuguese": "pt",
    "italian": "it",
    "dutch": "nl",
    "greek": "el",
    "turkish": "tr",
    "polish": "pl"
}

recognizer = sr.Recognizer()

def play(sound):
    engine.say(sound)
    engine.runAndWait()



def recognition():
    with sr.Microphone() as source:
        print("Listening ...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
        try:
            speech_text = recognizer.recognize_google(audio)
            print(f"You said: {speech_text}")
            return speech_text
        except sr.UnknownValueError:
            print("Sorry, our server couldn't understand the audio.")
            return None
        except sr.RequestError:
            print("Request error from the recognition service.")
            return None

def tran():
    # while True:

        #text=recognition()
    text="my name is Subodh"
        # if text:
    translated = translator.translate(text, src="en", dest="hi")
    print(translated.text)
    play(translated.text)

if __name__ == "__main__":
    tran()
