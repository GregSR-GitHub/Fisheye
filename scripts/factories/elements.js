class Media {
  constructor (src, name, parent, type) {
    this.src = src
    this.name = name
    this.parent = parent
    this.type = type
  }

  makeMedia () {
    if (this.type === 'image') {
      return new Image(this.src, this.name, this.parent).makeImage()
    } else if (this.type === 'video') {
      return new Video(this.src, this.name, this.parent).makeVideo()
    }
  }
}
class Image {
  constructor (src, alt, parent) {
    this.src = src
    this.alt = alt
    this.parent = parent
  }

  makeImage () {
    const $img = document.createElement('img')
    $img.setAttribute('src', this.src)
    $img.setAttribute('alt', this.alt)
    this.parent.appendChild($img)
    return $img
  }
}

class Video {
  constructor (src, title, parent) {
    this.src = src
    this.title = title
    this.parent = parent
  }

  makeVideo () {
    const $extension = this.src.split('.')[1]
    const $video = document.createElement('video')
    const $source = document.createElement('source')
    $video.appendChild($source)
    new TextElement('p', this.title, $video).makeElement()
    $source.setAttribute('src', this.src)
    $source.setAttribute('type', 'video/' + $extension)
    this.parent.appendChild($video)
    return $video
  }
}

class TextElement {
  constructor (type, content, parent) {
    this.type = type
    this.content = content
    this.parent = parent
  }

  makeElement () {
    const $element = document.createElement(this.type)
    $element.textContent = this.content
    this.parent.appendChild($element)
    return $element
  }
}

class Link {
  constructor (href, parent) {
    this.href = href
    this.parent = parent
  }

  makeLink () {
    const $a = document.createElement('a')
    $a.setAttribute('href', this.href)
    this.parent.appendChild($a)
    return $a
  }
}
