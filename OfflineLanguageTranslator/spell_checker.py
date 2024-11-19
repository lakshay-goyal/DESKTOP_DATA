from textblob import TextBlob

def spellChecking(data):
    textBlob = TextBlob(data)
    return textBlob.correct()
    
if __name__ == "__main__":
    data = "ceertain conditionas duriing severals ggenerations aree moodified in the same maner."
    result = spellChecking(data)
    print(result)