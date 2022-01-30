
function varargout = calculater(varargin)
% CALCULATER MATLAB code for calculater.fig
%      CALCULATER, by itself, creates a new CALCULATER or raises the existing
%      singleton*.
%
%      H = CALCULATER returns the handle to a new CALCULATER or the handle to
%      the existing singleton*.
%
%      CALCULATER('CALLBACK',hObject,eventData,handles,...) calls the local
%      function named CALLBACK in CALCULATER.M with the given input arguments.
%
%      CALCULATER('Property','Value',...) creates a new CALCULATER or raises the
%      existing singleton*.  Starting from the left, property value pairs are
%      applied to the GUI before calculater_OpeningFcn gets called.  An
%      unrecognized property name or invalid value makes property application
%      stop.  All inputs are passed to calculater_OpeningFcn via varargin.
%
%      *See GUI Options on GUIDE's Tools menu.  Choose "GUI allows only one
%      instance to run (singleton)".
%
% See also: GUIDE, GUIDATA, GUIHANDLES

% Edit the above text to modify the response to help calculater

% Last Modified by GUIDE v2.5 30-Jan-2022 10:27:04

% Begin initialization code - DO NOT EDIT

gui_Singleton = 1;
gui_State = struct('gui_Name',       mfilename, ...
                   'gui_Singleton',  gui_Singleton, ...
                   'gui_OpeningFcn', @calculater_OpeningFcn, ...
                   'gui_OutputFcn',  @calculater_OutputFcn, ...
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


% --- Executes just before calculater is made visible.
function calculater_OpeningFcn(hObject, eventdata, handles, varargin)
% This function has no output args, see OutputFcn.
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
% varargin   command line arguments to calculater (see VARARGIN)

% Choose default command line output for calculater
handles.output = hObject;
global op1
global op2
global d
global x
global y
global poting;
% Update handles structure
guidata(hObject, handles);


% UIWAIT makes calculater wait for user response (see UIRESUME)
% uiwait(handles.figure1);


% --- Outputs from this function are returned to the command line.
function varargout = calculater_OutputFcn(hObject, eventdata, handles) 
% varargout  cell array for returning output args (see VARARGOUT);
% hObject    handle to figure
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Get default command line output from handles structure
varargout{1} = handles.output;


% --- Executes on selection change in listbox1.
function listbox1_Callback(hObject, eventdata, handles)
% hObject    handle to listbox1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)


% Hints: contents = cellstr(get(hObject,'String')) returns listbox1 contents as cell array
%        contents{get(hObject,'Value')} returns selected item from listbox1
global lb1
contents = cellstr(get(hObject,'String'));
 lb1=contents{get(hObject,'Value')} ;
 set(handles.edit7,'String',lb1);

% --- Executes during object creation, after setting all properties.
function listbox1_CreateFcn(hObject, eventdata, handles)
% hObject    handle to listbox1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: listbox controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in pushbutton1.
function pushbutton1_Callback(hObject, eventdata, handles)
global x
global y
global lb1
set(handles.Error,'String',"   ");

x_axis=get(handles.x_vector,'String');

    
x=str2double(strsplit(x_axis,' '))
y_axis=get(handles.y_vector,'String')
y=str2double(strsplit(y_axis,' '));
[mx,nx]=size(x);
[my,ny]=size(y);
if(nx~=ny)
        set(handles.Error,'String',"Error vectors are not same size");
        set(handles.edit9,'String',' ');
elseif(max(isnan(x)) || max(isnan(y)))
    set(handles.Error,'String',"Error non numeric values");
    set(handles.edit9,'String',' ');
else 
    switch lb1
        case '-'
            r=x-y;         
        case '+'
            r=x+y;          
        case '*'
            r=x.*y;       
        case '/'
            if (y==0)
                set(handles.Error,'String','Cannot divide by zero');
                r='Error';
            else
                handles.Error.String = "  ";
                r=x./y;    
            end     
    end
    r=num2str(r);
    set(handles.edit9,'String',r);
end
    





function edit1_Callback(hObject, eventdata, handles)
% hObject    handle to edit1 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit1 as text
%        str2double(get(hObject,'String')) returns contents of edit1 as a double


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



function edit2_Callback(hObject, eventdata, handles)
% hObject    handle to edit2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit2 as text
%        str2double(get(hObject,'String')) returns contents of edit2 as a double
global op1
%op1=str2double(get(hObject,'String'));

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



function edit3_Callback(hObject, eventdata, handles)
% hObject    handle to edit3 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit3 as text
%        str2double(get(hObject,'String')) returns contents of edit3 as a double
global op2


% --- Executes during object creation, after setting all properties.
function edit3_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit3 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function result_Callback(hObject, eventdata, handles)
% hObject    handle to result (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of result as text
%        str2double(get(hObject,'String')) returns contents of result as a double


% --- Executes during object creation, after setting all properties.
function result_CreateFcn(hObject, eventdata, handles)
% hObject    handle to result (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function Error_Callback(hObject, eventdata, handles)
% hObject    handle to Error (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of Error as text
%        str2double(get(hObject,'String')) returns contents of Error as a double


% --- Executes during object creation, after setting all properties.
function Error_CreateFcn(hObject, eventdata, handles)
% hObject    handle to Error (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function x_vector_Callback(hObject, eventdata, handles)
% hObject    handle to x_vector (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of x_vector as text
%        str2double(get(hObject,'String')) returns contents of x_vector as a double
global x
%x=num2cell(get(hObject.x_vector,'value'))
%x=str2num(get(hObject.x_vector,'String'))
%x=str2double(get(hObject,'String'))
%contents = cellstr(get(hObject,'String'));
 %lb1=contents{get(hObject,'Value')} ;
 
%e6=split(get(hObject,'String')," ")
%c=[str2double(e6)]
%x=num2cell(c)




% --- Executes during object creation, after setting all properties.
function x_vector_CreateFcn(hObject, eventdata, handles)
% hObject    handle to x_vector (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function edit7_Callback(hObject, eventdata, handles)
% hObject    handle to edit7 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit7 as text
%        str2double(get(hObject,'String')) returns contents of edit7 as a double


% --- Executes during object creation, after setting all properties.
function edit7_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit7 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function y_vector_Callback(hObject, eventdata, handles)
% hObject    handle to y_vector (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of y_vector as text
%        str2double(get(hObject,'String')) returns contents of y_vector as a double
global y
%e8=str2double(get(hObject,'String'))

%y=num2cell(u)
% --- Executes during object creation, after setting all properties.
function y_vector_CreateFcn(hObject, eventdata, handles)
% hObject    handle to y_vector (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end



function edit9_Callback(hObject, eventdata, handles)
% hObject    handle to edit9 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of edit9 as text
%        str2double(get(hObject,'String')) returns contents of edit9 as a double


% --- Executes during object creation, after setting all properties.
function edit9_CreateFcn(hObject, eventdata, handles)
% hObject    handle to edit9 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on selection change in listbox2.
function listbox2_Callback(hObject, eventdata, handles)
% hObject    handle to listbox2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: contents = cellstr(get(hObject,'String')) returns listbox2 contents as cell array
%        contents{get(hObject,'Value')} returns selected item from listbox2
global lb2 
contents = cellstr(get(hObject,'String'));
 lb2=contents{get(hObject,'Value')} ;
 set(handles.edit1,'String',lb2);

% --- Executes during object creation, after setting all properties.
function listbox2_CreateFcn(hObject, eventdata, handles)
% hObject    handle to listbox2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: listbox controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in pushbutton2.
function pushbutton2_Callback(hObject, eventdata, handles)
% hObject    handle to pushbutton2 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global op1
global op2
global lb2
disp(op2);
set(handles.Error,'String',"   ");
    switch lb2
        case '-'
            result=str2double(get(handles.edit2,'String'))-str2double(get(handles.edit3,'String')) ;
        case '+'
            result=str2double(get(handles.edit3,'String'))+str2double(get(handles.edit2,'String')) ;
        case '*'
            result=str2double(get(handles.edit3,'String'))*str2double(get(handles.edit2,'String')) ;
        case '/'
            if (str2double(get(handles.edit3,'String'))==0)
                set(handles.Error,'String','Cannot divide by zero');
                result='Error';
              
            else
                 result=str2double(get(handles.edit2,'String'))/str2double(get(handles.edit3,'String')); ;
            end 
            end
    if(isnan(result))
       set(handles.Error,'String','Please enter numeric values');
       set(handles.result,'String','Error');
    else
        set(handles.result,'String',result);
    end 
    


% --- Executes on button press in Enter_axis.
function Enter_axis_Callback(hObject, eventdata, handles)
% hObject    handle to Enter_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
global poting;
global x;
global y;

poting = handles.uibuttongroup2.SelectedObject.Tag;
%disp(handles.uibuttongroup2.SelectedObject.String);
a=get(handles.eqn,'String')
ax=0:0.1:10;
p=poting
switch (string(poting))
    case 'X_radio'
       disp(x);
       axes(handles.axes2);   
        plot(x);   
    case 'Y_axis'
        plot(y);
     case 'X_Y_axis'
        plot(str2double(strsplit(get(handles.x_vector,'String'),' ')),str2double(strsplit(get(handles.x_vector,'String'),' ')));
        %plot(x,y);
    case 'Resultant'
        plot(str2double(strsplit(get(handles.edit9,'String'),' ')));
    case 'sine'
        axes(handles.axes2);
        plot(sin(pi*ax));
        xlim([0 100]);
    case 'con'
        axes(handles.axes2);
        plot(cos(pi*ax));
        xlim([0 100]);
    case 'Equation'
        axes(handles.axes2);
        ezplot(a);
       % if(isempty(a))
       %  set(handles.Error,'String','Please enter data');
      %  end
    otherwise
        plot(0,0);
end



% --- Executes on button press in pushbutton6.
function pushbutton6_Callback(hObject, eventdata, handles)
% hObject    handle to pushbutton6 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

cla reset;


function eqn_Callback(hObject, eventdata, handles)
% hObject    handle to eqn (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hints: get(hObject,'String') returns contents of eqn as text
%        str2double(get(hObject,'String')) returns contents of eqn as a double


% --- Executes during object creation, after setting all properties.
function eqn_CreateFcn(hObject, eventdata, handles)
% hObject    handle to eqn (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    empty - handles not created until after all CreateFcns called

% Hint: edit controls usually have a white background on Windows.
%       See ISPC and COMPUTER.
if ispc && isequal(get(hObject,'BackgroundColor'), get(0,'defaultUicontrolBackgroundColor'))
    set(hObject,'BackgroundColor','white');
end


% --- Executes on button press in X_axis.
function X_axis_Callback(hObject, eventdata, handles)
% hObject    handle to X_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.X_axis,'String');
% Hint: get(hObject,'Value') returns toggle state of X_axis


% --- Executes on button press in cosine.
function cosine_Callback(hObject, eventdata, handles)
% hObject    handle to cosine (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.cosine,'String');
% Hint: get(hObject,'Value') returns toggle state of cosine


% --- Executes on button press in Y_axis.
function Y_axis_Callback(hObject, eventdata, handles)
% hObject    handle to Y_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.Y_axis,'String');
% Hint: get(hObject,'Value') returns toggle state of Y_axis


% --- Executes on button press in X_Y_axis.
function X_Y_axis_Callback(hObject, eventdata, handles)
% hObject    handle to X_Y_axis (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.X_Y_axis,'String');
% Hint: get(hObject,'Value') returns toggle state of X_Y_axis


% --- Executes on button press in Resultant.
function Resultant_Callback(hObject, eventdata, handles)
% hObject    handle to Resultant (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.Resultant,'String');
% Hint: get(hObject,'Value') returns toggle state of Resultant


% --- Executes on button press in sine.
function sine_Callback(hObject, eventdata, handles)
% hObject    handle to sine (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.sine,'String');
% Hint: get(hObject,'Value') returns toggle state of sine
global poting;
poting = handles.uibuttongroup2.SelectedObject.String;


% --- Executes on button press in Equation.
function Equation_Callback(hObject, eventdata, handles)
% hObject    handle to Equation (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.Equation,'String');
% Hint: get(hObject,'Value') returns toggle state of Equation


% --- Executes on key press with focus on X_axis and none of its controls.
function X_axis_KeyPressFcn(hObject, eventdata, handles)
% hObject    handle to X_axis (see GCBO)
% eventdata  structure with the following fields (see MATLAB.UI.CONTROL.UICONTROL)
%	Key: name of the key that was pressed, in lower case
%	Character: character interpretation of the key(s) that was pressed
%	Modifier: name(s) of the modifier key(s) (i.e., control, shift) pressed
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.X_axis,'String');


% --- Executes on key press with focus on Resultant and none of its controls.
function Resultant_KeyPressFcn(hObject, eventdata, handles)
% hObject    handle to Resultant (see GCBO)
% eventdata  structure with the following fields (see MATLAB.UI.CONTROL.UICONTROL)
%	Key: name of the key that was pressed, in lower case
%	Character: character interpretation of the key(s) that was pressed
%	Modifier: name(s) of the modifier key(s) (i.e., control, shift) pressed
% handles    structure with handles and user data (see GUIDATA)
%global poting;
%poting =get(handles.Resultant,'String');


% --- Executes when selected object is changed in uibuttongroup2.
function uibuttongroup2_SelectionChangedFcn(hObject, eventdata, handles)
% hObject    handle to the selected object in uibuttongroup2 
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)


% --- Executes on button press in radiobutton17.
function radiobutton17_Callback(hObject, eventdata, handles)
% hObject    handle to radiobutton17 (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of radiobutton17


% --- Executes on button press in X_radio.
function X_radio_Callback(hObject, eventdata, handles)
% hObject    handle to X_radio (see GCBO)
% eventdata  reserved - to be defined in a future version of MATLAB
% handles    structure with handles and user data (see GUIDATA)

% Hint: get(hObject,'Value') returns toggle state of X_radio


% --- Executes on key press with focus on X_radio and none of its controls.
function X_radio_KeyPressFcn(hObject, eventdata, handles)
% hObject    handle to X_radio (see GCBO)
% eventdata  structure with the following fields (see MATLAB.UI.CONTROL.UICONTROL)
%	Key: name of the key that was pressed, in lower case
%	Character: character interpretation of the key(s) that was pressed
%	Modifier: name(s) of the modifier key(s) (i.e., control, shift) pressed
% handles    structure with handles and user data (see GUIDATA)
