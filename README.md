// hi there!
// hi yourself


//STOOP FRIENDS!!!!

//what: a react native app to locate and post stoop sales around New York City.

//Tech: React Native, Realm, MongoDB

//development environment: https://reactnative.dev/docs/environment-setup?guide=native

//you'll need: Node, Watchman, the React Native CLI, a ruby version manager, Xcode, CocoaPods

//check the ruby version (must be 2.7.6)

STEPS
-make sure you have homebrew-
check node version:  node -v (must be v14 or newer)
check watchman version: watchman -v (brew install watchman if not installed)
check ruby version: ruby -v (need 2.7.6)
  *this is the part that tripped us up for a while*
  things to figure out for sure:
    -do we need to cd into the project or install globally?
    -need a ruby version manager, we both used rbenv. https://github.com/rbenv/rbenv
    cd "Stoop-Friends-2000" rbenv install 2.7.6
    check version: rbenv version
    check local version: rbenv local

install rbenv: brew install rbenv ruby-build
rbenv init
rbenv install -l
rbenv install -L (to check the verstions available)
cd into project rbenv local 2.7.6
gem install bundler
-go to root directory
-run ls -a
open .zshrc
-run rbenv global 2.7.6
-run gem install bundler
sudo gem isntall cocoapods
install xcode and make sure you have the comand line tools


make sure you have Xcode: https://apps.apple.com/us/app/xcode/id497799835?mt=12 (make sure it is v10 or newer)
install the Xcode command line tools. in Xcode choose "Preferences" in Locations Panel select the most recent from the Command Line Tools dropdown menu.
install an ios simulator: Xcode -> Preferences -> Components -> select a simulator

Install CocoaPods: https://guides.cocoapods.org/using/getting-started.html (this might be the part where you need to cd into ios...)


