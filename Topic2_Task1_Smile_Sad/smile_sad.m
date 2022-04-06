function varargout = smile_sad(varargin)
% SMILE_SAD MATLAB code for smile_sad.fig
%      SMILE_SAD, by itself, creates a new SMILE_SAD or raises the existing
%      singleton*.
%
%      H = SMILE_SAD returns the handle to a new SMILE_SAD or the handle to
%      the existing singleton*.
%
%      SMILE_SAD('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in SMILE_SAD.M with the given input arguments.
%
%      SMILE_SAD('Property','Value',...) creates a new SMILE_SAD or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before smile_sad_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to smile_sad_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help smile_sad

% Last Modified by GUIDE v2.5 03-Mar-2022 22:00:58

% Begin initialization code - DO NOT EDIT
gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @smile_sad_OpeningFcn, ...
                   'gui_OutputFcn',  @smile_sad_OutputFcn, ...
                   'gui_LayoutFcn',  [] , ...
                   'gui_Callback',   []);
if nargin && ischar(varargin{1})
    gui_State.gui_Callback = str2func(varargin{1});
end

if nargout
    [varargout{1:nargout}] = gui_mainfcn(gui_State, varargin{:});
else
    gui_mainfcn(gui_State, varargin{:});
end
% End initialization code - DO NOT EDIT


% --- Executes just before smile_sad is made visible.
function smile_sad_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to smile_sad (see VARARGIN)
global img;
img = imread('Sad.jfif');
global img2;
img2 = imread('Happy.jfif');

global flag;
flag=0;
% Choose default command line output for smile_sad
handles.output = hObject;

% Update handles structure
guidata(hObject, handles);

% UIWAIT makes smile_sad wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = smile_sad_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;



function edit1_Callback(hObject, eventdata, handles)
% hObject    handle to edit1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit1 as text
%        str2double(get(hObject,'String')) returns contents of edit1 as a double
global flag;
if(str2double(get(handles.edit1,'string'))<60)
    axes(handles.axes1)
    set(handles.edit2,'string','above 60->  Sad :( ');
    
    flag=0;  
elseif(str2double(get(handles.edit1,'string'))>60)
    axes(handles.axes1)
    set(handles.edit2,'string',' below 60 -> Happy :)');
    flag=1;
end


% --- Executes during object creation, after setting all properties.
function edit1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in pushbutton1.
function pushbutton1_Callback(hObject, eventdata, handles)
% hObject    handle to pushbutton1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global img;
global img2;
global flag;

if(flag==0)
    cla;
    axes(handles.axes1);
    imshow(img);
   

elseif(flag==1)
    cla;
    axes(handles.axes1);
     imshow(img2);
    
     flag=0;
end



function edit2_Callback(hObject, eventdata, handles)
% hObject    handle to edit2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit2 as text
%        str2double(get(hObject,'String')) returns contents of edit2 as a double


% --- Executes during object creation, after setting all properties.
function edit2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end
