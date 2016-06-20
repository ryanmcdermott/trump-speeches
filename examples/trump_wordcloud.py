from os import path
from wordcloud import WordCloud
import matplotlib.pyplot as plt

d = path.dirname(__file__)

text = open(path.join(d, '../speeches.txt')).read()

wordcloud = WordCloud(max_font_size=40, relative_scaling=.5).generate(text)
plt.figure()
plt.imshow(wordcloud)
plt.axis("off")
plt.show()
